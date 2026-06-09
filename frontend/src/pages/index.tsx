import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Custom SVG Icons to replace emojis
const IconRadar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconCloudRain = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
    <line x1="8" y1="20" x2="8" y2="22" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="16" y1="20" x2="16" y2="22" />
  </svg>
);

const IconBarChart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const IconLayers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconLobby = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--accent-blue)' }}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="9" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><line x1="15" y1="16" x2="15" y2="22" />
    <line x1="9" y1="6" x2="9.01" y2="6" /><line x1="15" y1="6" x2="15.01" y2="6" />
    <line x1="9" y1="11" x2="9.01" y2="11" /><line x1="15" y1="11" x2="15.01" y2="11" />
  </svg>
);

const IconHall = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--accent-blue)' }}>
    <path d="M4 22h16M4 20h16M5 20V9M9 20V9M15 20V9M19 20V9M3 9l9-7 9 7" />
  </svg>
);

const IconCafeteria = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--accent-blue)' }}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
    <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const IconHome = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconBook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IconLightning = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconUpload = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-blue)', marginBottom: '4px' }}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const IconDpad = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="2" y="6" width="20" height="12" rx="3" ry="3" />
    <line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" />
    <circle cx="16" cy="12" r="1.5" /><circle cx="18.5" cy="12" r="1.5" />
  </svg>
);

const IconTV = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const IconBag = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export default function LandingPage() {
  const [activeLayout, setActiveLayout] = useState<'welcome' | 'menu' | 'promo' | 'upload'>('welcome');
  const [phoneTab, setPhoneTab] = useState<'controller' | 'tvs'>('controller');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [syncing, setSyncing] = useState(false);


  
  // Simulator State
  const [activeTV, setActiveTV] = useState<{ id: string; name: string; location: string; pin: string; icon: React.ReactNode }>({
    id: 'TV1',
    name: 'Screen 1',
    location: 'Lobby',
    pin: '1111',
    icon: <IconLobby />
  });

  const TV_LIST_SIM = [
    { id: 'TV1', name: 'Screen 1', location: 'Lobby', pin: '1111', icon: <IconLobby /> },
    { id: 'TV2', name: 'Screen 2', location: 'Hall A', pin: '2222', icon: <IconHall /> },
    { id: 'TV3', name: 'Screen 3', location: 'Hall B', pin: '3333', icon: <IconHall /> },
    { id: 'TV4', name: 'Screen 4', location: 'Cafeteria', pin: '4444', icon: <IconCafeteria /> },
  ];

  function triggerSyncAnimation(newLayout: 'welcome' | 'menu' | 'promo' | 'upload') {
    setSyncing(true);
    setTimeout(() => {
      setActiveLayout(newLayout);
      setTimeout(() => {
        setSyncing(false);
      }, 1000);
    }, 600);
  }

  function handleUploadSimulation() {
    if (isUploading) return;
    setIsUploading(true);
    setUploadProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 8;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsUploading(false);
          triggerSyncAnimation('upload');
        }, 300);
      }
      setUploadProgress(progress);
    }, 80);
  }

  function handleTVChange(tv: typeof TV_LIST_SIM[0]) {
    setSyncing(true);
    setTimeout(() => {
      setActiveTV(tv);
      setPhoneTab('controller');
      // Reset back to welcome layout on new TV
      setActiveLayout('welcome');
      setTimeout(() => {
        setSyncing(false);
      }, 1000);
    }, 500);
  }

  return (
    <>
      <Head>
        <title>Signage Ctrl - Smart Cloud Digital Signage Platform</title>
        <meta name="description" content="A simple digital signage platform to control multiple TVs from a phone or browser. Sync displays in real-time using secure TV PINs and accounts." />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>

      <div className="landing-body">
        {/* Header Navigation */}
        <header className="landing-header">
          <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/logo.png" alt="Signage CTRL Logo" style={{ height: '56px', width: 'auto' }} />
            <span className="logo-text" style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>Signage Ctrl</span>
          </Link>
          
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#how-to-use">How to Use</a></li>
              <li><Link href="/marketing" style={{ fontWeight: 700, color: 'var(--accent-blue)' }}>Marketing Agency</Link></li>
            </ul>
          </nav>

          <div>
            <Link href="/app" className="btn btn-primary" id="header-btn-launch" style={{ padding: '8px 18px', fontSize: '0.85rem', borderRadius: '20px' }}>
              Launch App
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="landing-main">
          
          {/* Hero Section */}
          <section className="hero-section" id="hero">
            <div className="hero-badge">Multi-TV Control Cloud</div>
            <h1 className="hero-title">Intelligent screens. Controlled from your phone.</h1>
            <p className="hero-description">
              A simple digital signage web app. Log in with the same account on your TV and Controller, select a TV PIN, upload your media, and watch the TV update automatically in real-time.
            </p>
            <div className="hero-actions">
              <Link href="/app" className="btn btn-primary" id="hero-btn-launch">
                <span>Open Signage App</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </Link>
              <a href="#how-it-works" className="btn btn-secondary">
                <span>See How It Syncs</span>
              </a>
            </div>
          </section>

          {/* Interactive Sync Simulator Showcase */}
          <section className="sync-demo-section" id="how-it-works">
            <div className="demo-title-area">
              <h2>Interactive Sync Simulator</h2>
              <p>Click options on the Controller phone below to see the Smart TV display update instantly.</p>
            </div>

            <div className="devices-wrapper">
              {/* 1. Simulated Smartphone Controller */}
              <div className="phone-container">
                <div className="phone-frame">
                  <div className="phone-notch" aria-hidden="true"></div>
                  <div className="phone-screen">
                    
                    <div className="phone-header">
                      <div className="phone-header-title">Signage Ctrl</div>
                      <div className="phone-header-subtitle">Active: <span id="phone-active-tv">{activeTV.name} ({activeTV.location})</span></div>
                    </div>

                    <div className="phone-content">
                      {phoneTab === 'controller' ? (
                        <>
                          <span className="phone-section-title">Select Layout</span>
                          <div className="phone-layouts-grid">
                            <button 
                              className={`phone-layout-btn ${activeLayout === 'welcome' ? 'active' : ''}`}
                              onClick={() => triggerSyncAnimation('welcome')}
                            >
                              <span className="phone-btn-icon"><IconHome /></span>
                              <span className="phone-btn-txt">Welcome Board</span>
                            </button>
                            <button 
                              className={`phone-layout-btn ${activeLayout === 'menu' ? 'active' : ''}`}
                              onClick={() => triggerSyncAnimation('menu')}
                            >
                              <span className="phone-btn-icon"><IconBook /></span>
                              <span className="phone-btn-txt">Dinner Specials</span>
                            </button>
                            <button 
                              className={`phone-layout-btn ${activeLayout === 'promo' ? 'active' : ''}`}
                              onClick={() => triggerSyncAnimation('promo')}
                            >
                              <span className="phone-btn-icon"><IconLightning /></span>
                              <span className="phone-btn-txt">Flash Sale Ads</span>
                            </button>
                          </div>

                          <span className="phone-section-title" style={{ marginTop: '8px' }}>Upload Media</span>
                          <div className="phone-upload-box" onClick={handleUploadSimulation}>
                            <div className="phone-upload-icon"><IconUpload /></div>
                            <div className="phone-upload-text">Simulate File Upload</div>
                            <div className="phone-upload-sub">Upload image / video files</div>
                            {/* Simulated loader */}
                            <div className="phone-progress-bar" style={{ display: isUploading ? 'block' : 'none' }}>
                              <div className="phone-progress-fill" style={{ width: `${uploadProgress}%` }}></div>
                            </div>
                          </div>

                        </>
                      ) : (
                        <>
                          <span className="phone-section-title">Select Display</span>
                          <div className="sim-tv-list" style={{ display: 'grid', gap: '8px', marginTop: '4px' }}>
                            {TV_LIST_SIM.map(tv => (
                              <button 
                                key={tv.id} 
                                onClick={() => handleTVChange(tv)}
                                className={`phone-layout-btn ${activeTV.id === tv.id ? 'active' : ''}`}
                                style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                  <span>{tv.icon}</span>
                                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{tv.name}</span>
                                    <span style={{ fontSize: '0.65rem', color: '#86868b' }}>{tv.location}</span>
                                  </div>
                                </div>
                                <span style={{ fontSize: '0.7rem', background: '#f5f5f7', padding: '3px 6px', borderRadius: '4px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>PIN {tv.pin}</span>
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="phone-bottom-nav" aria-hidden="true">
                      <div className={`phone-nav-item ${phoneTab === 'controller' ? 'active' : ''}`} onClick={() => setPhoneTab('controller')}>
                        <span className="phone-nav-icon"><IconDpad /></span>
                        <span>Controller</span>
                      </div>
                      <div className={`phone-nav-item ${phoneTab === 'tvs' ? 'active' : ''}`} onClick={() => setPhoneTab('tvs')}>
                        <span className="phone-nav-icon"><IconTV /></span>
                        <span>TVs List</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* 2. Simulated Smart TV Screen Display */}
              <div className="tv-display-container">
                <div className="tv-container">
                  <div className="tv-frame" id="interactive-tv" title="Click to open app" style={{ cursor: 'pointer' }}>
                    <Link href="/app" style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}>
                      {/* Location details overlay badge */}
                      <div className="tv-info-overlay">
                        <span className="tv-info-loc">{activeTV.location.toUpperCase()}</span>
                        <span className="tv-info-pin">PIN: <span>{activeTV.pin}</span></span>
                      </div>

                      {/* Sync State Indicator */}
                      <div className={`tv-sync-pulse ${syncing ? 'syncing' : ''}`}>
                        <span className="tv-pulse-dot"></span>
                        <span>SYNCED</span>
                      </div>

                      <div className="tv-screen">
                        
                        {/* Welcome Slide Layout */}
                        <div className={`tv-slide slide-welcome ${activeLayout === 'welcome' ? 'active' : ''}`}>
                          <img src="/logo.png" alt="Signage CTRL Logo" className="welcome-logo-img" style={{ height: '120px', width: 'auto', marginBottom: '20px', objectFit: 'contain' }} />
                          <h3 className="welcome-heading">Welcome to Signage Ctrl</h3>
                          <p className="welcome-sub">Use the smartphone controller to update the contents of this display in real-time.</p>
                        </div>

                        {/* Menu specials Slide Layout */}
                        <div className={`tv-slide slide-menu ${activeLayout === 'menu' ? 'active' : ''}`}>
                          <div className="menu-header">
                            <span className="menu-brand">BISTRO NOVA</span>
                            <span className="menu-title">DAILY MENU SPECIALS</span>
                          </div>
                          <div className="menu-grid">
                            <div className="menu-row">
                              <span className="menu-item-name">Truffle Pasta</span>
                              <span className="menu-item-price">$24.00</span>
                            </div>
                            <div className="menu-row">
                              <span className="menu-item-name">Ribeye Steak 10oz</span>
                              <span className="menu-item-price">$38.00</span>
                            </div>
                            <div className="menu-row">
                              <span className="menu-item-name">Duck Breast</span>
                              <span className="menu-item-price">$29.00</span>
                            </div>
                            <div className="menu-row">
                              <span className="menu-item-name">Smoked Salmon Salad</span>
                              <span className="menu-item-price">$18.00</span>
                            </div>
                          </div>
                          <div className="menu-footer">
                            Ingredients locally sourced • Daily rotation
                          </div>
                        </div>

                        {/* Promo Banner Slide Layout */}
                        <div className={`tv-slide slide-promo ${activeLayout === 'promo' ? 'active' : ''}`}>
                          <div className="promo-text-col">
                            <span className="promo-tag">LIMITED TIME</span>
                            <h3 className="promo-title">Summer Collection 40% OFF</h3>
                            <p className="promo-desc">Flash Sale active across all participating outlet chains.</p>
                          </div>
                          <div className="promo-graphic-col">
                            <div className="promo-circle-glow"><IconBag /></div>
                          </div>
                        </div>

                        {/* Custom Mock Image Uploaded Display */}
                        <div className={`tv-slide slide-upload ${activeLayout === 'upload' ? 'active' : ''}`}>
                          {/* Simulated upload placeholder image */}
                          <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width%3D'640' height%3D'360' viewBox%3D'0 0 640 360'%3E%3Crect width%3D'100%25' height%3D'100%25' fill%3D'%23e8f2ff'%2F%3E%3Ctext x%3D'50%25' y%3D'50%25' font-family%3D'sans-serif' font-size%3D'20' font-weight%3D'bold' fill%3D'%230071e3' text-anchor%3D'middle' alignment-baseline%3D'middle'%3EIMAGE UPLOAD SIMULATED SUCCESS%3C%2Ftext%3E%3C%2Fsvg%3E" alt="Simulated Upload" className="uploaded-image-display" />
                        </div>


                      </div>
                    </Link>
                  </div>
                  <div className="tv-stand-bar" aria-hidden="true"></div>
                  <div className="tv-base-bar" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Use the App Section */}
          <section className="pin-section" id="how-to-use">
            <div className="demo-title-area">
              <h2>How to Use Signage Ctrl</h2>
              <p>Follow these simple steps to sync and control your displays in minutes.</p>
            </div>

            <div className="how-to-grid">
              {/* Step 1 */}
              <div className="glass-card flex-step">
                <div className="step-num">1</div>
                <h4 className="step-title">Launch the TV Display</h4>
                <p className="step-desc">
                  Open the app on your Smart TV or display browser, select <strong>TV User Mode</strong>, and enter a pairing PIN (e.g. <code>1111</code>). The display will wait in full screen.
                </p>
              </div>

              {/* Step 2 */}
              <div className="glass-card flex-step">
                <div className="step-num">2</div>
                <h4 className="step-title">Connect your Remote</h4>
                <p className="step-desc">
                  Open the app on your smartphone or browser. Log in with the <strong>same account</strong>, select <strong>Controller Mode</strong>, and choose the matching TV PIN (e.g. <code>1111</code>).
                </p>
              </div>

              {/* Step 3 */}
              <div className="glass-card flex-step">
                <div className="step-num">3</div>
                <h4 className="step-title">Upload & Sync Media</h4>
                <p className="step-desc">
                  Select dynamic slide layouts (Welcome boards, menus, promo banners) or upload custom images and video files. The linked TV updates automatically.
                </p>
              </div>

              {/* Step 4 */}
              <div className="glass-card flex-step">
                <div className="step-num">4</div>
                <h4 className="step-title">Manage Multiple TVs</h4>
                <p className="step-desc">
                  Switch screens dynamically from your controller's TV list tab. Choose from PINs <code>1111</code> to <code>1010</code> to control up to 10 distinct displays.
                </p>
              </div>
            </div>
          </section>

          {/* Digital Marketing Agency Promotion Banner */}
          <section style={{ background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%)', border: '1px solid var(--border-light)', borderRadius: '28px', padding: '40px', marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '1px' }}>Full-Service Growth Partner</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.8px', color: 'var(--text-primary)', lineHeight: 1.2 }}>Want to double your foot traffic & store sales?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, maxWidth: '700px' }}>
                Our digital signage is free, but we also run targeted local advertising, Google Maps SEO, in-store loyalty campaigns, and high-converting screen designs.
              </p>
            </div>
            <div>
              <Link href="/marketing" className="btn btn-primary" style={{ padding: '14px 30px', borderRadius: '30px', fontWeight: 700, whiteSpace: 'nowrap' }}>
                Explore Marketing Services &rarr;
              </Link>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="landing-footer">
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo.png" alt="Signage CTRL Logo" style={{ height: '44px', width: 'auto' }} />
            <span className="logo-text" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>Signage Ctrl</span>
          </div>
          
          <nav className="footer-nav" aria-label="Footer Links">
            <a href="#how-it-works">How It Works</a>
            <a href="#how-to-use">How to Use</a>
            <Link href="/marketing">Marketing Agency</Link>
            <Link href="/app">Launch App</Link>
          </nav>
          
          <p className="footer-text">
            &copy; 2026 Signage Ctrl. All rights reserved. Cloud Digital Signage Solutions.
          </p>
        </footer>
      </div>
    </>
  );
}