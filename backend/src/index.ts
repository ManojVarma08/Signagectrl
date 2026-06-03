import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// Load environmental variables. We load .env from backend, and .env.local from both backend and frontend directories to be bulletproof.
dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
dotenv.config({ path: path.resolve(__dirname, '../../frontend/.env.local') });

const app = express();
const PORT = process.env.PORT || 3002;

// Enable CORS and body parsing
app.use(cors({ origin: '*' }));
app.use(express.json());

// Logger middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// =========================================================================
// 1. Documentation & RAG context for Chatbot
// =========================================================================
const DOCUMENTATION = `
# Signage Ctrl — Digital Signage Platform Documentation

Signage Ctrl is a free cloud digital signage web application that allows users to control multiple TVs or display screens from a smartphone, tablet, or web browser.

## Getting Started: How to Use the App
To link a display screen (like a Smart TV) to your remote controller:

1. **Open the TV Display Screen:**
   - Go to the website on your Smart TV or display browser.
   - Click "TV User Mode" (or select TV User).
   - Enter or select a pairing PIN (e.g. 1111).
   - The screen will now show a blue waiting display and a QR code with the PIN.

2. **Open the Controller (Your Phone/Remote):**
   - Open the app on your smartphone or browser.
   - Make sure you log in with the EXACT SAME Supabase account that is logged in on the TV.
   - Select "Controller Mode" (or select Controller).
   - Enter or select the matching TV PIN (e.g. 1111).

3. **Change layouts and upload media:**
   - Select a layout to split your TV display screen (e.g., Full Screen, Split Horizontal, Split Vertical, 2x2 Grid, etc.).
   - Click on the zone you want to update.
   - Upload an image (JPG, PNG) or video (MP4) to that zone.
   - The TV display will update in real-time.

4. **Controlling Multiple TVs:**
   - You can manage up to 10 distinct displays using TV PINs from 1111 to 1010.
   - Switch between screens on your controller using the TVs tab/list.

## Available TV Locations & PINs:
- TV1: PIN 1111 (Lobby)
- TV2: PIN 2222 (Hall A)
- TV3: PIN 3333 (Hall B)
- TV4: PIN 4444 (Cafeteria)
- TV5: PIN 5555 (Board Room)
- TV6: PIN 6666 (Reception)
- TV7: PIN 7777 (Corridor 1)
- TV8: PIN 8888 (Corridor 2)
- TV9: PIN 9999 (Gym)
- TV10: PIN 1010 (Rooftop)

## Sync & Security Logic:
- Sync works using: user_id + tv_id.
- Same account + TV1 PIN = controls that account's TV1.
- Different accounts are isolated. A user logged in as userA cannot control userB's TV, even if they use the same PIN.
- Real-time communication is powered by Supabase Realtime/Polling.

## Common Issues & Troubleshooting:
- **Upload failed:** Check that the bucket name is "signage-media", the bucket is public, and the file size is not too large. Also make sure you are logged in.
- **TV not updating:** Ensure both the TV browser and your Phone remote are logged in with the same email account and are using the exact same PIN.
`;

const SYSTEM_INSTRUCTION = `
You are the Signage Ctrl AI Assistant, a helpful helper for the Signage Ctrl Digital Signage application.
Your goal is to explain how to use the application, troubleshoot issues, and provide information about the platform's features.

Here is the only documentation you should use to answer questions:
${DOCUMENTATION}

CRITICAL RULES:
1. ONLY answer questions related to Signage Ctrl, digital signage, and how to use this app. If asked about unrelated topics, politely direct the user back to Signage Ctrl.
2. DO NOT reveal any personal or sensitive information:
   - Do NOT share Supabase keys, passwords, database URLs, secret tokens, or AWS credentials.
   - Do NOT share personal developer names, emails, or system paths.
   - If asked for API keys, Supabase URLs, or credentials, answer: "For security reasons, database keys and credentials cannot be shared."
3. Keep your answers concise, friendly, and easy to understand.
4. Reply in the same language the user uses (English or Telugu/Telugulish).
`;

// =========================================================================
// 2. Route Handlers
// =========================================================================

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', server: 'Signage Ctrl Backend', timestamp: new Date().toISOString() });
});

// GET TV State (legacy endpoint using global memory storage)
app.get('/api/tv-state', (req: Request, res: Response) => {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'id required' });
  const state = (globalThis as any)[`tv_${String(id).toUpperCase()}`] || null;
  return res.status(200).json(state);
});

// POST Push state (legacy endpoint using global memory storage)
app.post('/api/push', (req: Request, res: Response) => {
  const { tvId, layoutId, cells } = req.body;
  if (!tvId) return res.status(400).json({ error: 'tvId required' });
  (globalThis as any)[`tv_${tvId.toUpperCase()}`] = { tvId, layoutId, cells, updatedAt: Date.now() };
  return res.status(200).json({ success: true });
});

// POST Gemini Chat endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages history is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Upcoming update' });
  }

  const contents = messages.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents,
          systemInstruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }]
          },
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 800,
          }
        }),
      }
    );

    if (!response.ok) {
      const errorData: any = await response.json();
      return res.status(response.status).json({
        error: errorData.error?.message || 'Failed to generate response from Gemini API'
      });
    }

    const data: any = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!replyText) {
      return res.status(500).json({ error: 'No text returned from Gemini API' });
    }

    return res.status(200).json({ reply: replyText });
  } catch (error: any) {
    console.error('Error in chat API:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// POST Imagen Image generation endpoint
app.post('/api/ai-image', async (req: Request, res: Response) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Upcoming update' });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          instances: [{ prompt }],
          parameters: {
            sampleCount: 1,
            aspectRatio: '16:9',
            outputMimeType: 'image/jpeg',
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData: any = await response.json();
      return res.status(response.status).json({
        error: errorData.error?.message || 'Failed to generate image from Imagen API'
      });
    }

    const data: any = await response.json();
    const base64Image = data.predictions?.[0]?.bytesBase64Encoded;
    if (!base64Image) {
      return res.status(500).json({ error: 'No image data returned from API' });
    }

    const dataUrl = `data:image/jpeg;base64,${base64Image}`;
    return res.status(200).json({ url: dataUrl });
  } catch (error: any) {
    console.error('Error generating image:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 Signage Ctrl Backend Server running on port ${PORT}`);
  console.log(`🔑 Gemini Key loaded: ${process.env.GEMINI_API_KEY ? 'YES (Loaded)' : 'NO (Missing)'}`);
  console.log(`==================================================`);
});
