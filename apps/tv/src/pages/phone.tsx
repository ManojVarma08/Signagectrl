import { useState, useRef, useEffect } from 'react';

const SUPABASE_URL = 'https://wkilfvbytdazmnohksiu.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndraWxmdmJ5dGRhem1ub2hrc2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwNDI1NTgsImV4cCI6MjA5MjYxODU1OH0.3pZ6vHJXFmniWtMQo5KHZkovEwkuC4shaDw6FZOJtVE';

// Custom clean SVG Icons to replace emojis/blocks
const IconTV = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const IconCamera = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const IconPin = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconSliders = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);

const IconMedia = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const IconVideo = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const IconChevronRight = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const IconRadar = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconCloudRain = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
    <line x1="8" y1="20" x2="8" y2="22" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="16" y1="20" x2="16" y2="22" />
  </svg>
);

const IconBarChart = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const IconLayers = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

// Location SVG Icons
const IconLobby = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="9" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><line x1="15" y1="16" x2="15" y2="22" />
    <line x1="9" y1="6" x2="9.01" y2="6" /><line x1="15" y1="6" x2="15.01" y2="6" />
    <line x1="9" y1="11" x2="9.01" y2="11" /><line x1="15" y1="11" x2="15.01" y2="11" />
  </svg>
);

const IconHall = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M4 22h16M4 20h16M5 20V9M9 20V9M15 20V9M19 20V9M3 9l9-7 9 7" />
  </svg>
);

const IconCafeteria = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
    <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const IconBriefcase = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const IconBell = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const IconWalk = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M13 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM6 14l2-6 3-2 3 3 2 4M10 22v-5l-2-3-1 8M14 22v-4l-2-2 1-6" />
  </svg>
);

const IconGym = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M18 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM6 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 21a9 9 0 0 0 9-9M12 3a9 9 0 0 0-9 9" />
    <path d="M6.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM17.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM21 12H3" />
  </svg>
);

const IconRooftop = ({ size = 20, style = {} }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d="M2 17h20M2 12h20M12 2L2 12h20L12 2zM4 17v4h16v-4" />
  </svg>
);

const TV_LIST = [
  { id: 'TV1',  name: 'Screen 1',  location: 'Lobby',      icon: 'lobby',      pin: '1111' },
  { id: 'TV2',  name: 'Screen 2',  location: 'Hall A',     icon: 'hall',       pin: '2222' },
  { id: 'TV3',  name: 'Screen 3',  location: 'Hall B',     icon: 'hall',       pin: '3333' },
  { id: 'TV4',  name: 'Screen 4',  location: 'Cafeteria',  icon: 'cafeteria',  pin: '4444' },
  { id: 'TV5',  name: 'Screen 5',  location: 'Board Room', icon: 'briefcase',  pin: '5555' },
  { id: 'TV6',  name: 'Screen 6',  location: 'Reception',  icon: 'bell',       pin: '6666' },
  { id: 'TV7',  name: 'Screen 7',  location: 'Corridor 1', icon: 'walk',       pin: '7777' },
  { id: 'TV8',  name: 'Screen 8',  location: 'Corridor 2', icon: 'walk',       pin: '8888' },
  { id: 'TV9',  name: 'Screen 9',  location: 'Gym',        icon: 'gym',        pin: '9999' },
  { id: 'TV10', name: 'Screen 10', location: 'Rooftop',    icon: 'rooftop',    pin: '1010' },
];

const LAYOUTS = [
  { id: 'L1',  name: 'Full Screen', cells: 1, cols: '1fr',         rows: '1fr'         },
  { id: 'L2',  name: 'Split H',     cells: 2, cols: '1fr 1fr',     rows: '1fr'         },
  { id: 'L3',  name: 'Split V',     cells: 2, cols: '1fr',         rows: '1fr 1fr'     },
  { id: 'L4',  name: '2x2 Grid',    cells: 4, cols: '1fr 1fr',     rows: '1fr 1fr'     },
  { id: 'L5',  name: '3 Column',    cells: 3, cols: '1fr 1fr 1fr', rows: '1fr'         },
  { id: 'L6',  name: 'Big Left',    cells: 3, cols: '2fr 1fr',     rows: '1fr 1fr'     },
  { id: 'L7',  name: 'Big Right',   cells: 3, cols: '1fr 2fr',     rows: '1fr 1fr'     },
  { id: 'L8',  name: '4 Zones',     cells: 4, cols: '1fr 1fr',     rows: '1fr 1fr'     },
  { id: 'L9',  name: 'Banner + 2',  cells: 3, cols: '1fr 1fr',     rows: '2fr 1fr'     },
  { id: 'L10', name: 'Triple Row',  cells: 3, cols: '1fr 1fr 1fr', rows: '1fr'         },
  { id: 'L11', name: 'Pic-in-Pic',  cells: 2, cols: '1fr',         rows: '1fr'         },
  { id: 'L12', name: 'Mosaic',      cells: 5, cols: '2fr 1fr',     rows: '1fr 1fr 1fr' },
];

const ZONE_COLORS = ['#0ea5e9','#0284c7','#0369a1','#075985','#0c4a6e'];

function renderLocationIcon(key: string, size = 20, style: React.CSSProperties = {}) {
  switch (key) {
    case 'lobby': return <IconLobby size={size} style={style} />;
    case 'hall': return <IconHall size={size} style={style} />;
    case 'cafeteria': return <IconCafeteria size={size} style={style} />;
    case 'briefcase': return <IconBriefcase size={size} style={style} />;
    case 'bell': return <IconBell size={size} style={style} />;
    case 'walk': return <IconWalk size={size} style={style} />;
    case 'gym': return <IconGym size={size} style={style} />;
    case 'rooftop': return <IconRooftop size={size} style={style} />;
    default: return <IconTV size={size} style={style} />;
  }
}

async function uploadMedia(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target?.result as string);
    reader.readAsDataURL(file);
  });
}

export default function PhonePage() {
  const [view, setView] = useState<'home' | 'scanner' | 'tv' | 'layout' | 'media'>('home');
  const [selectedTV, setSelectedTV] = useState<any>(null);
  const [tvState, setTvState] = useState<any>(null);
  const [selectedLayoutId, setSelectedLayoutId] = useState<string | null>(null);
  const [cells, setCells] = useState<any[]>([]);
  const [activeCell, setActiveCell] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [scanInput, setScanInput] = useState('');
  const [notification, setNotification] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const notify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Poll TV state in real-time
  useEffect(() => {
    if (!selectedTV) return;

    const fetchState = async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/rest/v1/tv_states?tv_id=eq.${selectedTV.id}&select=*`,
          {
            headers: {
              apikey: SUPABASE_KEY,
              Authorization: `Bearer ${SUPABASE_KEY}`
            }
          }
        );
        if (res.ok) {
          const data = await res.json();
          if (data?.[0]) {
            setTvState(data[0]);
            setCells(data[0].cells || []);
            setSelectedLayoutId(data[0].layout_id || null);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchState();
    const interval = setInterval(fetchState, 3000);
    return () => clearInterval(interval);
  }, [selectedTV]);

  const pushToTV = async (layoutId: string, updatedCells: any[]) => {
    if (!selectedTV) return;
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/tv_states?tv_id=eq.${selectedTV.id}`, {
        method: 'PATCH',
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          layout_id: layoutId,
          cells: updatedCells,
          updated_at: Date.now()
        })
      });
    } catch (err) {
      console.error(err);
      notify('Failed to sync to Screen');
    }
  };

  const setTVMetadata = async (newMeta: any) => {
    if (!selectedTV || !tvState) return;
    const nextCells = tvState.cells ? JSON.parse(JSON.stringify(tvState.cells)) : [{ mediaUrl: null, mediaType: null }];
    if (nextCells.length === 0) nextCells.push({ mediaUrl: null, mediaType: null });

    nextCells[0] = {
      ...nextCells[0],
      metadata: {
        ...(nextCells[0].metadata || {}),
        ...newMeta
      }
    };

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/tv_states?tv_id=eq.${selectedTV.id}`, {
        method: 'PATCH',
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cells: nextCells,
          updated_at: Date.now()
        })
      });
      setTvState((p: any) => ({ ...p, cells: nextCells }));
    } catch (err) {
      console.error(err);
      notify('Failed to save settings');
    }
  };

  const handleScan = (code: string) => {
    const tv = TV_LIST.find(t => t.id === code.toUpperCase().trim() || t.pin === code.trim());
    if (tv) {
      setSelectedTV(tv);
      setView('tv');
      setScanInput('');
    } else {
      notify(`"${code}" is not a valid Screen PIN or ID`);
    }
  };

  const applyLayout = async (layoutId: string) => {
    const layout = LAYOUTS.find(l => l.id === layoutId)!;
    setSelectedLayoutId(layoutId);
    const emptyCells = Array.from({ length: layout.cells }, () => ({ mediaUrl: null, mediaType: null }));
    setCells(emptyCells);
    setActiveCell(0);
    await pushToTV(layoutId, emptyCells);
    notify(`Layout "${layout.name}" applied to ${selectedTV.name}`);
    setView('media');
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const type = file.type.startsWith('video') ? 'video' : 'image';
    setUploading(true);
    try {
      const url = await uploadMedia(file);
      const newCells = cells.map((c, i) => i === activeCell ? { mediaUrl: url, mediaType: type } : c);
      setCells(newCells);
      await pushToTV(selectedLayoutId!, newCells);
      notify(`Success: Media live on ${selectedTV.name} — Zone ${activeCell + 1}`);
    } catch {
      notify('Upload failed');
    } finally {
      setUploading(false);
      if (e.target) e.target.value = '';
    }
  };

  const selectedLayout = LAYOUTS.find(l => l.id === selectedLayoutId);
  const metadata = tvState?.cells?.[0]?.metadata || {};

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui, sans-serif', maxWidth: 430, margin: '0 auto', borderLeft: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0' }}>

      {/* Notification */}
      {notification && (
        <div style={{
          position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)',
          background: notification.includes('Success') ? '#f0f9ff' : '#fef2f2',
          color: notification.includes('Success') ? '#0284c7' : '#dc2626',
          padding: '10px 20px', borderRadius: 10, fontSize: 13, fontWeight: 600,
          zIndex: 1000, whiteSpace: 'nowrap', boxShadow: '0 4px 20px rgba(15,23,42,0.08)',
          border: `1px solid ${notification.includes('Success') ? '#bbaeef' : '#fca5a5'}`,
        }}>
          {notification}
        </div>
      )}

      {/* ── HOME ── */}
      {view === 'home' && (
        <div>
          <div style={{ background: '#0f172a', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <IconTV size={24} style={{ color: '#0ea5e9' }} />
              <div>
                <div style={{ color: '#fff', fontSize: 18, fontWeight: 800, letterSpacing: '-0.3px' }}>Signage Ctrl</div>
                <div style={{ color: '#94a3b8', fontSize: 11, marginTop: 2 }}>Control {TV_LIST.length} displays</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(16,185,129,0.15)', borderRadius: 20, padding: '5px 12px', border: '1px solid rgba(16,185,129,0.3)' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
              <span style={{ color: '#10b981', fontSize: 11, fontWeight: 700 }}>{TV_LIST.length} Live</span>
            </div>
          </div>

          <div style={{ padding: 16 }}>
            {/* Scan button */}
            <button onClick={() => setView('scanner')} style={{
              width: '100%', background: '#0ea5e9', borderRadius: 14, padding: '18px',
              display: 'flex', alignItems: 'center', gap: 14, border: 'none', cursor: 'pointer',
              marginBottom: 20, boxShadow: '0 4px 20px rgba(14,165,233,0.3)',
            }}>
              <IconCamera size={26} style={{ color: '#fff' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: '#fff', fontSize: 15, fontWeight: 800 }}>Scan TV QR Code</div>
                <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 11, marginTop: 2 }}>Point camera at TV screen</div>
              </div>
              <IconChevronRight size={20} style={{ color: 'rgba(255,255,255,0.7)', marginLeft: 'auto' }} />
            </button>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ color: '#64748b', fontSize: 11, fontWeight: 700, letterSpacing: 1.5 }}>ALL DISPLAYS</span>
              <span style={{ color: '#64748b', fontSize: 11 }}>{TV_LIST.length} Screens</span>
            </div>

            {TV_LIST.map(tv => (
              <button key={tv.id} onClick={() => { setSelectedTV(tv); setView('tv'); }} style={{
                width: '100%', background: '#fff', borderRadius: 14, padding: 14,
                display: 'flex', alignItems: 'center', gap: 14, border: '1px solid #e2e8f0',
                cursor: 'pointer', marginBottom: 10, boxShadow: '0 2px 8px rgba(15,23,42,0.04)',
              }}>
                <div style={{ width: 68, height: 44, background: '#0f172a', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '2px solid #0ea5e9', flexShrink: 0 }}>
                  {renderLocationIcon(tv.icon, 16, { color: '#0ea5e9' })}
                  <span style={{ color: '#0ea5e9', fontSize: 8, fontWeight: 700, marginTop: 2 }}>{tv.name}</span>
                </div>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div style={{ color: '#0f172a', fontSize: 14, fontWeight: 800 }}>{tv.name}</div>
                  <div style={{ color: '#64748b', fontSize: 11, marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <IconPin size={11} style={{ color: '#64748b' }} />
                    {tv.location}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                  <span style={{ fontSize: 10, background: '#f1f5f9', padding: '3px 6px', borderRadius: 6, color: '#0ea5e9', fontWeight: 'bold' }}>PIN {tv.pin}</span>
                  <IconChevronRight size={20} style={{ color: '#94a3b8' }} />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── SCANNER ── */}
      {view === 'scanner' && (
        <div>
          <div style={{ background: '#0f172a', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={() => setView('home')} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', borderRadius: 8, padding: '6px 12px', cursor: 'pointer', fontSize: 13 }}>← Back</button>
            <span style={{ color: '#fff', fontSize: 16, fontWeight: 800 }}>Scan TV QR Code</span>
          </div>
          <div style={{ padding: 16 }}>
            {/* Viewfinder */}
            <div style={{ background: '#0f172a', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ width: 200, height: 200, position: 'relative', border: '1px solid rgba(255,255,255,0.1)', marginBottom: 16 }}>
                {/* Corners */}
                {[{top:0,left:0,borderTop:'3px solid #0ea5e9',borderLeft:'3px solid #0ea5e9'},{top:0,right:0,borderTop:'3px solid #0ea5e9',borderRight:'3px solid #0ea5e9'},{bottom:0,left:0,borderBottom:'3px solid #0ea5e9',borderLeft:'3px solid #0ea5e9'},{bottom:0,right:0,borderBottom:'3px solid #0ea5e9',borderRight:'3px solid #0ea5e9'}].map((cs, i) => (
                  <div key={i} style={{ position: 'absolute', width: 24, height: 24, ...cs } as any} />
                ))}
                <div style={{ position: 'absolute', left: 10, right: 10, height: 2, background: '#0ea5e9', top: '50%' }} />
              </div>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Point camera at TV QR code</span>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ color: '#64748b', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, marginBottom: 10 }}>ENTER TV PIN OR ID</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <input value={scanInput} onChange={e => setScanInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleScan(scanInput)}
                  placeholder="e.g. 1111, 2222, TV1..." style={{ flex: 1, padding: '10px 14px', background: '#fff', border: '1.5px solid #cbd5e1', borderRadius: 10, fontSize: 14, outline: 'none', color: '#0f172a' }} />
                <button onClick={() => handleScan(scanInput)} style={{ padding: '10px 20px', background: '#0ea5e9', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', fontWeight: 700 }}>Go</button>
              </div>
            </div>

            <div style={{ color: '#64748b', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, marginBottom: 10 }}>QUICK SELECT</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
              {TV_LIST.map(tv => (
                <button key={tv.id} onClick={() => handleScan(tv.id)} style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.3)', borderRadius: 10, padding: '10px 4px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                  {renderLocationIcon(tv.icon, 16, { color: '#0ea5e9' })}
                  <span style={{ color: '#0ea5e9', fontSize: 9, fontWeight: 700 }}>{tv.name.replace('Screen ', 'S')}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TV DETAIL ── */}
      {view === 'tv' && selectedTV && (
        <div>
          <div style={{ background: '#0f172a', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={() => setView('home')} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', borderRadius: 8, padding: '6px 12px', cursor: 'pointer', fontSize: 13 }}>← Back</button>
            <span style={{ color: '#fff', fontSize: 16, fontWeight: 800 }}>{selectedTV.name}</span>
          </div>
          <div style={{ padding: 16 }}>
            <div style={{ background: '#0f172a', borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ width: 88, height: 56, background: '#1e293b', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '2px solid #0ea5e9', marginBottom: 12 }}>
                {renderLocationIcon(selectedTV.icon, 24, { color: '#0ea5e9' })}
                <span style={{ color: '#0ea5e9', fontSize: 10, fontWeight: 700, marginTop: 2 }}>{selectedTV.name}</span>
              </div>
              <div style={{ color: '#fff', fontSize: 20, fontWeight: 900 }}>{selectedTV.name}</div>
              <div style={{ color: '#94a3b8', fontSize: 13, marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                <IconPin size={13} style={{ color: '#94a3b8' }} />
                {selectedTV.location} · PIN {selectedTV.pin}
              </div>
            </div>

            <div style={{ color: '#64748b', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, marginBottom: 10 }}>BASIC CONTROLS</div>
            {[
              { icon: <IconSliders size={22} style={{ color: '#0ea5e9' }} />, title: 'Change Layout', sub: 'Choose from 12 zone layouts', action: () => setView('layout'), bg: 'rgba(14,165,233,0.1)' },
              { icon: <IconMedia size={22} style={{ color: '#10b981' }} />, title: 'Push Media', sub: 'Upload image or video to TV', action: () => selectedLayoutId ? setView('media') : setView('layout'), bg: 'rgba(16,185,129,0.1)' },
            ].map((item, i) => (
              <button key={i} onClick={item.action} style={{ width: '100%', background: '#fff', borderRadius: 14, padding: 16, display: 'flex', alignItems: 'center', gap: 14, border: '1px solid #e2e8f0', cursor: 'pointer', marginBottom: 10, boxShadow: '0 2px 8px rgba(15,23,42,0.04)', textAlign: 'left' }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#0f172a', fontSize: 14, fontWeight: 800 }}>{item.title}</div>
                  <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>{item.sub}</div>
                </div>
                <IconChevronRight size={20} style={{ color: '#94a3b8' }} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── LAYOUT ── */}
      {view === 'layout' && selectedTV && (
        <div>
          <div style={{ background: '#0f172a', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={() => setView('tv')} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', borderRadius: 8, padding: '6px 12px', cursor: 'pointer', fontSize: 13 }}>← Back</button>
            <span style={{ color: '#fff', fontSize: 16, fontWeight: 800 }}>Select Layout</span>
          </div>
          <div style={{ padding: 16 }}>
            <div style={{ color: '#64748b', fontSize: 12, marginBottom: 16 }}>Choose how to divide {selectedTV.name} screen into zones</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, paddingBottom: 100 }}>
              {LAYOUTS.map(l => {
                const isSel = selectedLayoutId === l.id;
                return (
                  <button key={l.id} onClick={() => applyLayout(l.id)} style={{ background: isSel ? 'rgba(14, 165, 233, 0.1)' : '#fff', borderRadius: 12, padding: 8, border: `1.5px solid ${isSel ? '#0ea5e9' : '#e2e8f0'}`, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', aspectRatio: '16/9', background: '#0f172a', borderRadius: 5, overflow: 'hidden', marginBottom: 6, display: 'flex', flexWrap: 'wrap', padding: 2, gap: 2 }}>
                      {Array.from({ length: l.cells }, (_, i) => (
                        <div key={i} style={{ flex: 1, minWidth: '28%', background: isSel ? ZONE_COLORS[i % ZONE_COLORS.length] : '#334155', borderRadius: 2 }} />
                      ))}
                    </div>
                    <span style={{ fontSize: 9, fontWeight: 700, color: isSel ? '#0ea5e9' : '#0f172a' }}>{l.name}</span>
                    <span style={{ fontSize: 8, color: '#64748b' }}>{l.cells} zones</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── MEDIA ── */}
      {view === 'media' && selectedTV && selectedLayout && (
        <div>
          <div style={{ background: '#0f172a', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={() => setView('tv')} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', borderRadius: 8, padding: '6px 12px', cursor: 'pointer', fontSize: 13 }}>← Back</button>
            <span style={{ color: '#fff', fontSize: 16, fontWeight: 800 }}>Push Media</span>
          </div>
          <div style={{ padding: 16 }}>
            {/* TV bar */}
            <div style={{ background: '#0f172a', borderRadius: 12, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              {renderLocationIcon(selectedTV.icon, 22, { color: '#0ea5e9' })}
              <div>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: 14 }}>{selectedTV.name}</div>
                <div style={{ color: '#94a3b8', fontSize: 11 }}>{selectedLayout.name} · {cells.length} zones</div>
              </div>
            </div>

            {/* Zone selector */}
            <div style={{ color: '#64748b', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, marginBottom: 10 }}>SELECT ZONE</div>
            <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4, marginBottom: 12 }}>
              {cells.map((cell, i) => (
                <button key={i} onClick={() => setActiveCell(i)} style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', border: `1.5px solid ${activeCell === i ? '#0ea5e9' : '#cbd5e1'}`, borderRadius: 12, padding: 6, background: activeCell === i ? 'rgba(14, 165, 233, 0.1)' : '#fff', cursor: 'pointer' }}>
                  {cell.mediaUrl ? (
                    cell.mediaType === 'image'
                      ? <img src={cell.mediaUrl} style={{ width: 70, height: 52, borderRadius: 7, objectFit: 'cover' }} alt="" />
                      : <div style={{ width: 70, height: 52, borderRadius: 7, background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconVideo size={20} style={{ color: '#0ea5e9' }} /></div>
                  ) : (
                    <div style={{ width: 70, height: 52, borderRadius: 7, background: 'rgba(14, 165, 233, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#0ea5e9' }}>+</div>
                  )}
                  <span style={{ fontSize: 10, color: activeCell === i ? '#0ea5e9' : '#64748b', marginTop: 4, fontWeight: activeCell === i ? 800 : 600 }}>Zone {i + 1}</span>
                </button>
              ))}
            </div>

            {/* Active banner */}
            <div style={{ background: 'rgba(14, 165, 233, 0.1)', borderRadius: 10, padding: '10px 14px', marginBottom: 16, borderLeft: '3px solid #0ea5e9' }}>
              <span style={{ color: '#334155', fontSize: 12 }}>Pushing to: <strong style={{ color: '#0ea5e9' }}>{selectedTV.name} — Zone {activeCell + 1}</strong></span>
            </div>

            {/* Upload */}
            {uploading ? (
              <div style={{ textAlign: 'center', padding: 40 }}>
                <div style={{ fontSize: 14, color: '#0ea5e9', fontWeight: 700 }}>Uploading...</div>
              </div>
            ) : (
              <>
                <div style={{ color: '#64748b', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, marginBottom: 10 }}>PUSH MEDIA TO ZONE {activeCell + 1}</div>
                <input ref={fileRef} type="file" accept="image/*,video/*" style={{ display: 'none' }} onChange={handleFileUpload} />

                {[
                  { icon: <IconMedia size={22} style={{ color: '#0ea5e9' }} />, title: 'Upload Image', sub: 'JPG, PNG → TV instantly', bg: 'rgba(14, 165, 233, 0.1)' },
                  { icon: <IconVideo size={22} style={{ color: '#10b981' }} />, title: 'Upload Video', sub: 'MP4 → TV instantly', bg: 'rgba(16, 185, 129, 0.1)' },
                ].map((item, i) => (
                  <button key={i} onClick={() => fileRef.current?.click()} style={{ width: '100%', background: '#fff', borderRadius: 14, padding: 16, display: 'flex', alignItems: 'center', gap: 14, border: '1px solid #e2e8f0', cursor: 'pointer', marginBottom: 10 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <div style={{ color: '#0f172a', fontSize: 14, fontWeight: 800 }}>{item.title}</div>
                      <div style={{ color: '#64748b', fontSize: 11, marginTop: 2 }}>{item.sub}</div>
                    </div>
                    <IconChevronRight size={20} style={{ color: '#94a3b8' }} />
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f8fafc; }
        button { font-family: inherit; }
        .back-btn { background: #ffffff; border: 1px solid #cbd5e1; border-radius: 10px; padding: 7px 12px; cursor: pointer; font-size: 13px; font-weight: 800; color: #334155; }
        .panel-header { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 14px; display: flex; align-items: center; gap: 14px; box-shadow: 0 4px 12px rgba(15,23,42,0.03); }
        .section-label { color: #64748b; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin: 20px 0 10px; }
        .engagement-btn { width: 100%; height: 80px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; cursor: pointer; transition: all 0.15s ease; box-shadow: 0 4px 12px rgba(15,23,42,0.03); }
        .engagement-btn:hover { border-color: #bae6fd; background: #f0f9ff; transform: translateY(-1.5px); box-shadow: 0 8px 18px rgba(14,165,233,0.08); }
        .engagement-btn .btn-title { font-size: 12px; font-weight: 800; color: #0f172a; }
        .engagement-btn .btn-icon { line-height: 1; }
        .toggle-btn { transition: all 0.15s ease; }
        .toggle-btn:active { transform: scale(0.96); }
      `}</style>
    </div>
  );
}