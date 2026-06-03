import type { NextApiRequest, NextApiResponse } from 'next';

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages history is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY is not set on the server. Please add it to your environment variables.'
    });
  }

  // Format messages for Gemini API
  // Translate system instruction to system_instruction parameter in the body
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
      const errorData = await response.json();
      return res.status(response.status).json({
        error: errorData.error?.message || 'Failed to generate response from Gemini API'
      });
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!replyText) {
      return res.status(500).json({ error: 'No text returned from Gemini API' });
    }

    return res.status(200).json({ reply: replyText });
  } catch (error: any) {
    console.error('Error in chat API:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
