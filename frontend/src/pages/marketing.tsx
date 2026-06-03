import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MarketingPage() {
  const [activePreview, setActivePreview] = useState<'restaurant' | 'retail' | 'corporate' | 'tech'>('restaurant');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    goal: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Consultation requested successfully! Our digital marketing strategy team will review your business goals and contact you within 24 hours.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      budget: '',
      goal: '',
      message: ''
    });
  };

  return (
    <>
      <Head>
        <title>Digital Marketing & Sales Growth Solutions | Signage Ctrl Agency</title>
        <meta name="description" content="Explode your sales and foot traffic with professional digital marketing, local SEO, PPC advertising, and optimized digital signage layouts. Request a free consultation." />
        <meta name="keywords" content="digital marketing agency, local SEO, sales growth, signage marketing, retail marketing, restaurant marketing, lead generation, conversion rate optimization" />
      </Head>

      <div className="landing-body">
        {/* Header Navigation */}
        <header className="landing-header" style={{ background: 'rgba(15, 23, 42, 0.85)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img src="/logo.png" alt="Signage CTRL Logo" style={{ height: '56px', width: 'auto' }} />
            <span className="logo-text" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>Signage Ctrl</span>
          </Link>
          
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li><Link href="/" style={{ color: '#cbd5e1' }}>Digital Signage</Link></li>
              <li><a href="#services" className="active" style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>Marketing Services</a></li>
              <li><a href="#layouts" style={{ color: '#cbd5e1' }}>Visual Layouts</a></li>
              <li><a href="#inquiry" style={{ color: '#cbd5e1' }}>Enquire Now</a></li>
            </ul>
          </nav>

          <div>
            <Link href="/app" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem', borderRadius: '20px' }}>
              Launch App
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="landing-main" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 6% 60px 6%', display: 'flex', flexDirection: 'column', gap: '70px' }}>
          
          {/* Custom style overrides for dark marketing sections */}
          <style jsx>{`
            .marketing-hero {
              background: radial-gradient(circle at top right, rgba(14, 165, 233, 0.15), transparent 60%), 
                          radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.1), transparent 50%),
                          #0f172a;
              color: #ffffff;
              padding: 100px 8% 80px 8%;
              border-radius: 0 0 40px 40px;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 20px;
              position: relative;
              overflow: hidden;
              margin-top: -30px;
            }
            .marketing-hero::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
              background-size: 40px 40px;
              background-position: center top;
              pointer-events: none;
            }
            .marketing-hero h1 {
              font-size: 3.8rem;
              font-weight: 800;
              letter-spacing: -2px;
              line-height: 1.1;
              max-width: 900px;
              background: linear-gradient(135deg, #ffffff 40%, #0ea5e9 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            @media (max-width: 768px) {
              .marketing-hero h1 {
                font-size: 2.6rem;
                letter-spacing: -1px;
              }
            }
            .badge-gold {
              background: rgba(245, 158, 11, 0.15);
              color: #f59e0b;
              border: 1px solid rgba(245, 158, 11, 0.3);
              padding: 6px 14px;
              border-radius: 30px;
              font-size: 0.8rem;
              font-weight: 700;
              letter-spacing: 0.5px;
              text-transform: uppercase;
            }
            .marketing-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
              gap: 28px;
              margin-top: 30px;
            }
            .marketing-card {
              background: #ffffff;
              border: 1px solid rgba(15, 23, 42, 0.08);
              border-radius: 24px;
              padding: 36px;
              display: flex;
              flex-direction: column;
              gap: 16px;
              transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
              box-shadow: 0 8px 30px rgba(15, 23, 42, 0.02);
              position: relative;
              overflow: hidden;
            }
            .marketing-card::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 4px;
              height: 100%;
              background: #0ea5e9;
              opacity: 0;
              transition: all 0.2s ease;
            }
            .marketing-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
              border-color: rgba(14, 165, 233, 0.2);
            }
            .marketing-card:hover::after {
              opacity: 1;
            }
            .marketing-icon-box {
              width: 56px;
              height: 56px;
              border-radius: 16px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 1.5rem;
              margin-bottom: 8px;
            }
            .layout-switcher-container {
              display: grid;
              grid-template-columns: 1fr 1.5fr;
              gap: 40px;
              background: #ffffff;
              border-radius: 32px;
              border: 1px solid rgba(15, 23, 42, 0.08);
              padding: 40px;
              box-shadow: 0 8px 30px rgba(15, 23, 42, 0.02);
              align-items: start;
            }
            @media (max-width: 1024px) {
              .layout-switcher-container {
                grid-template-columns: 1fr;
                padding: 24px;
              }
            }
            .switcher-btn {
              width: 100%;
              text-align: left;
              padding: 20px;
              background: #f8fafc;
              border: 1px solid rgba(15, 23, 42, 0.08);
              border-radius: 16px;
              cursor: pointer;
              display: flex;
              flex-direction: column;
              gap: 6px;
              transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
              margin-bottom: 12px;
            }
            .switcher-btn:hover {
              background: #f1f5f9;
              transform: translateX(4px);
            }
            .switcher-btn.active {
              background: rgba(14, 165, 233, 0.08);
              border-color: #0ea5e9;
              box-shadow: 0 10px 20px rgba(14, 165, 233, 0.05);
            }
            .switcher-btn-title {
              font-weight: 700;
              font-size: 1.05rem;
              color: #0f172a;
            }
            .switcher-btn-desc {
              font-size: 0.8rem;
              color: #64748b;
              line-height: 1.4;
            }
            .preview-canvas-wrapper {
              background: #0f172a;
              border: 12px solid #334155;
              border-radius: 24px;
              aspect-ratio: 16/9;
              width: 100%;
              position: relative;
              overflow: hidden;
              box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15);
              color: #fff;
            }
            .preview-layout {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
              transition: opacity 0.5s ease-in-out;
              display: flex;
              box-sizing: border-box;
            }
            .preview-layout.active {
              opacity: 1;
              z-index: 5;
            }
            .layout-restaurant {
              background: linear-gradient(135deg, #180c02 0%, #301703 100%);
              padding: 24px;
              flex-direction: column;
              justify-content: space-between;
            }
            .rest-header {
              display: flex;
              justify-content: space-between;
              border-bottom: 2px solid #f59e0b;
              padding-bottom: 8px;
            }
            .rest-logo {
              color: #f59e0b;
              font-weight: 800;
              font-size: 1.25rem;
            }
            .rest-tagline {
              color: #94a3b8;
              font-size: 0.7rem;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .rest-body {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
              margin: 10px 0;
            }
            .rest-item {
              display: flex;
              flex-direction: column;
              gap: 2px;
            }
            .rest-item-header {
              display: flex;
              justify-content: space-between;
              font-weight: 700;
              font-size: 0.9rem;
              color: #f8fafc;
            }
            .rest-item-price {
              color: #f59e0b;
            }
            .rest-item-desc {
              font-size: 0.7rem;
              color: #cbd5e1;
            }
            .rest-footer {
              text-align: center;
              font-size: 0.65rem;
              color: #f59e0b;
              background: rgba(245, 158, 11, 0.1);
              padding: 6px;
              border-radius: 6px;
              border: 1px solid rgba(245, 158, 11, 0.2);
            }
            .layout-retail {
              background: linear-gradient(135deg, #022c22 0%, #064e3b 100%);
              padding: 28px;
              display: grid;
              grid-template-columns: 1.2fr 0.8fr;
              align-items: center;
              gap: 16px;
            }
            .retail-text {
              display: flex;
              flex-direction: column;
              gap: 10px;
            }
            .retail-tag {
              background: #10b981;
              color: #fff;
              padding: 3px 8px;
              border-radius: 4px;
              font-size: 0.65rem;
              font-weight: 700;
              width: fit-content;
              text-transform: uppercase;
            }
            .retail-title {
              font-size: 1.5rem;
              font-weight: 800;
              line-height: 1.2;
              color: #fff;
            }
            .retail-desc {
              font-size: 0.8rem;
              color: #a7f3d0;
            }
            .retail-code-box {
              border: 2px dashed rgba(16, 185, 129, 0.5);
              border-radius: 12px;
              padding: 10px;
              background: rgba(16, 185, 129, 0.1);
              text-align: center;
              display: flex;
              flex-direction: column;
              gap: 4px;
            }
            .retail-code-title {
              font-size: 0.6rem;
              color: #10b981;
              font-weight: 700;
              text-transform: uppercase;
            }
            .retail-code {
              font-size: 1.2rem;
              font-weight: 800;
              color: #fff;
              letter-spacing: 1px;
            }
            .layout-corporate {
              background: radial-gradient(circle at center, #1e1b4b 0%, #0f0b36 100%);
              padding: 30px;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              gap: 12px;
            }
            .corp-logo-ring {
              width: 44px;
              height: 44px;
              border-radius: 50%;
              border: 2px solid #818cf8;
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: 800;
              color: #fff;
              background: rgba(129, 140, 248, 0.2);
            }
            .corp-title {
              font-size: 1.5rem;
              font-weight: 700;
              letter-spacing: -0.5px;
              color: #fff;
            }
            .corp-subtitle {
              font-size: 0.8rem;
              color: #c7d2fe;
              max-width: 380px;
              line-height: 1.4;
            }
            .corp-agenda {
              display: flex;
              gap: 12px;
              margin-top: 8px;
            }
            .corp-agenda-item {
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.1);
              padding: 6px 12px;
              border-radius: 8px;
              font-size: 0.65rem;
              color: #94a3b8;
            }
            .corp-agenda-item strong {
              color: #fff;
              display: block;
              margin-bottom: 2px;
            }
            .layout-tech {
              background: #09090b;
              padding: 24px;
              flex-direction: column;
              justify-content: space-between;
              border: 1px solid #27272a;
            }
            .tech-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .tech-brand {
              color: #0ea5e9;
              font-weight: 800;
              letter-spacing: -0.5px;
              font-size: 1.1rem;
            }
            .tech-live-badge {
              display: flex;
              align-items: center;
              gap: 6px;
              font-size: 0.6rem;
              background: rgba(14, 165, 233, 0.15);
              color: #0ea5e9;
              padding: 4px 8px;
              border-radius: 12px;
              font-weight: 700;
            }
            .tech-pulse-dot {
              width: 6px;
              height: 6px;
              background: #0ea5e9;
              border-radius: 50%;
              animation: pulse-glow 1.5s infinite;
            }
            .tech-main {
              text-align: left;
            }
            .tech-main h3 {
              font-size: 1.3rem;
              font-weight: 800;
              line-height: 1.2;
              color: #fff;
            }
            .tech-main p {
              font-size: 0.75rem;
              color: #71717a;
              margin-top: 4px;
            }
            .tech-footer {
              display: flex;
              justify-content: space-between;
              font-size: 0.6rem;
              color: #52525b;
              border-top: 1px solid #18181b;
              padding-top: 8px;
            }
            @keyframes pulse-glow {
              0% { transform: scale(0.9); opacity: 0.5; }
              50% { transform: scale(1.2); opacity: 1; }
              100% { transform: scale(0.9); opacity: 0.5; }
            }
          `}</style>

          {/* Marketing Hero Section */}
          <section className="marketing-hero">
            <div className="badge-gold">PRO DIGITAL MARKETING SERVICES</div>
            <h1>Dominate Local Markets. Increase Foot Traffic. Double Sales.</h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '700px', lineHeight: '1.6' }}>
              Traditional signage informs, but conversion-focused marketing sells. We combine smart cloud displays with premium SEO, local ad targeting, and customer loyalty funnels to generate direct ROI for your storefront.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
              <a href="#inquiry" className="btn btn-primary" style={{ background: '#0ea5e9', borderRadius: '30px', padding: '14px 32px' }}>
                Get a Sales Audit
              </a>
              <a href="#layouts" className="btn btn-secondary" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                Preview Live Layouts
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="demo-title-area" style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.8px' }}>Digital Marketing Solutions We Serve</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0' }}>What booming marketing agencies use to scale high-street retail stores and modern brands.</p>
            </div>

            <div className="marketing-grid">
              {/* Service 1: Local SEO */}
              <div className="marketing-card">
                <div className="marketing-icon-box" style={{ background: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9' }}>📍</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>Local SEO & Google Maps Domination</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  We optimize your Google Business profile and rank your store in the local "Map Pack" search results. Get found by high-intent customers searching for products near them.
                </p>
              </div>

              {/* Service 2: PPC Ads */}
              <div className="marketing-card">
                <div className="marketing-icon-box" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>🚀</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>Hyper-Local Paid Ads (Meta & Google)</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Target potential clients in a 3-mile radius with high-converting Facebook, Instagram, and Google Search campaigns. Showcase daily offers directly on local feeds.
                </p>
              </div>

              {/* Service 3: SMM & Content */}
              <div className="marketing-card">
                <div className="marketing-icon-box" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>🎥</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>Social Media Marketing & Video Reels</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  High-definition visual content production, short-form Reels, and lifestyle photography. We curate professional social profiles that build trust and drive footfall.
                </p>
              </div>

              {/* Service 4: In-Store Loyalty Funnels */}
              <div className="marketing-card">
                <div className="marketing-icon-box" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>📱</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>Smart QR Loyalty & SMS marketing</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Turn in-store visitors into lifetime customers. We implement dynamic QR codes on screens that collect phone numbers and automatically trigger SMS/email promo sequences.
                </p>
              </div>

              {/* Service 5: Signage CRO Layouts */}
              <div className="marketing-card">
                <div className="marketing-icon-box" style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' }}>📺</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>Conversion Signage Design Templates</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Design layouts modeled after cognitive sales psychology. Eye-catching grids, strategic item placement, and timed flash-sales that double basket size during checkouts.
                </p>
              </div>

              {/* Service 6: Analytics & Audits */}
              <div className="marketing-card">
                <div className="marketing-icon-box" style={{ background: 'rgba(20, 184, 166, 0.1)', color: '#14b8a6' }}>📈</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>Sales Audits & Campaign Reporting</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Get precise dashboards showing visual impressions, coupon redemptions, foot traffic counts, and total sales. We iterate marketing setups based on pure data.
                </p>
              </div>
            </div>
          </section>

          {/* Layout Switcher Section */}
          <section id="layouts" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="demo-title-area" style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.8px' }}>Choose Your Brand Design System</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '8px auto 0' }}>Interact with the switcher below to see how our pro layouts look on digital displays.</p>
            </div>

            <div className="layout-switcher-container">
              {/* Switcher Left: Control Buttons */}
              <div>
                <button 
                  className={`switcher-btn ${activePreview === 'restaurant' ? 'active' : ''}`} 
                  onClick={() => setActivePreview('restaurant')}
                >
                  <span className="switcher-btn-title">1. Restaurant Menu Board</span>
                  <span className="switcher-btn-desc">Rich daily food specials, warm gradients, clear item grids and price tags to increase average basket values.</span>
                </button>
                
                <button 
                  className={`switcher-btn ${activePreview === 'retail' ? 'active' : ''}`} 
                  onClick={() => setActivePreview('retail')}
                >
                  <span className="switcher-btn-title">2. Retail Promo Layout</span>
                  <span className="switcher-btn-desc">High-contrast emerald theme, coupon code boxes, bold headings for summer/flash discount sales.</span>
                </button>
                
                <button 
                  className={`switcher-btn ${activePreview === 'corporate' ? 'active' : ''}`} 
                  onClick={() => setActivePreview('corporate')}
                >
                  <span className="switcher-btn-title">3. Corporate Lobby Lounge</span>
                  <span className="switcher-btn-desc">Premium dark indigo space theme, welcome titles, visitor badges and clean schedules for office screens.</span>
                </button>

                <button 
                  className={`switcher-btn ${activePreview === 'tech' ? 'active' : ''}`} 
                  onClick={() => setActivePreview('tech')}
                >
                  <span className="switcher-btn-title">4. Tech & Agency Layout</span>
                  <span className="switcher-btn-desc">Minimalist borders, neon sky indicators, and real-time live tickers for modern studios and co-working areas.</span>
                </button>
              </div>

              {/* Switcher Right: Display Canvas Mockup */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', width: '100%' }}>
                <div className="preview-canvas-wrapper">
                  
                  {/* Welcome Slide Layout (Restaurant) */}
                  <div className={`preview-layout layout-restaurant ${activePreview === 'restaurant' ? 'active' : ''}`}>
                    <div className="rest-header">
                      <span className="rest-logo">🍳 The Daily Grill</span>
                      <span className="rest-tagline">Fresh Hot Specials</span>
                    </div>
                    <div className="rest-body">
                      <div className="rest-item">
                        <div className="rest-item-header">
                          <span>Avocado Toast Combo</span>
                          <span className="rest-item-price">$12.50</span>
                        </div>
                        <span className="rest-item-desc">Sourdough, poached eggs, chili oil, organic microgreens.</span>
                      </div>
                      <div className="rest-item">
                        <div className="rest-item-header">
                          <span>Maple Bacon Skillet</span>
                          <span className="rest-item-price">$16.00</span>
                        </div>
                        <span className="rest-item-desc">Glazed thick bacon, crispy potato wedges, sunny side eggs.</span>
                      </div>
                      <div className="rest-item">
                        <div className="rest-item-header">
                          <span>Berry Waffle Plate</span>
                          <span className="rest-item-price">$14.00</span>
                        </div>
                        <span className="rest-item-desc">Belgian waffle, fresh blueberries, whipped mascarpone.</span>
                      </div>
                      <div className="rest-item">
                        <div className="rest-item-header">
                          <span>Cold Brew Tonic</span>
                          <span className="rest-item-price">$6.50</span>
                        </div>
                        <span className="rest-item-desc">Single-origin espresso, premium tonic, organic lemon twist.</span>
                      </div>
                    </div>
                    <div className="rest-footer">
                      Order at counter • Add organic avocado for +$3.00
                    </div>
                  </div>

                  {/* Retail Layout */}
                  <div className={`preview-layout layout-retail ${activePreview === 'retail' ? 'active' : ''}`}>
                    <div className="retail-text">
                      <span className="retail-tag">SUMMER EXCLUSIVE</span>
                      <h3 className="retail-title">Summer Collection Buy 1 Get 1 Free</h3>
                      <p className="retail-desc">Applies to all shoes, shirts, and casual accessories in-store today.</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div className="retail-code-box">
                        <span className="retail-code-title">Present At Counter</span>
                        <span className="retail-code">SUMMER50</span>
                        <span style={{ fontSize: '0.55rem', color: '#a7f3d0', marginTop: '4px' }}>Expires Sunday 9 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Corporate Layout */}
                  <div className={`preview-layout layout-corporate ${activePreview === 'corporate' ? 'active' : ''}`}>
                    <div className="corp-logo-ring">A</div>
                    <h3 className="corp-title">Welcome to Apex Enterprises</h3>
                    <p className="corp-subtitle">We are honored to host the Q2 Commercial Partnership Summit inside Boardroom 4-B today.</p>
                    <div className="corp-agenda">
                      <div className="corp-agenda-item">
                        <strong>09:30 AM</strong> Welcome Intro
                      </div>
                      <div className="corp-agenda-item">
                        <strong>11:00 AM</strong> Strategy Planning
                      </div>
                      <div className="corp-agenda-item">
                        <strong>01:30 PM</strong> Partners Luncheon
                      </div>
                    </div>
                  </div>

                  {/* Tech Layout */}
                  <div className={`preview-layout layout-tech ${activePreview === 'tech' ? 'active' : ''}`}>
                    <div className="tech-header">
                      <span className="tech-brand">NEXUS STUDIOS</span>
                      <div className="tech-live-badge">
                        <span className="tech-pulse-dot"></span>
                        <span>LIVE CAMPAIGN</span>
                      </div>
                    </div>
                    <div className="tech-main">
                      <h3>Design Sprint Kickoff starts in 10 minutes</h3>
                      <p>All design leads report to the central hub room. Bring sketches and coffee.</p>
                    </div>
                    <div className="tech-footer">
                      <span>Room: Creative Studio</span>
                      <span>Time: 04:30 PM - 05:30 PM</span>
                      <span>Speaker: Clara Chen</span>
                    </div>
                  </div>

                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 500 }}>
                  <span>📺 Screen Preview Model: <strong>Ultra-HD Digital Signage Billboard</strong></span>
                </div>
              </div>
            </div>
          </section>

          {/* Marketing Enquiry Form & Contact Info */}
          <section className="inquiry-section" id="inquiry" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', marginTop: '10px' }}>
            {/* Contact Details Side */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.8px', lineHeight: 1.2 }}>Discuss Your Marketing Goals With Us</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Are you ready to optimize your storefront marketing and scale sales? Contact our marketing strategist team. We offer custom consultations, local ad audits, and tailored layout setup.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
                {/* Email */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--accent-blue-light)', color: 'var(--accent-blue)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.1rem' }}>✉️</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Marketing Solutions Team</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>info@signagectrl.com</div>
                  </div>
                </div>
                {/* Phone */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--accent-blue-light)', color: 'var(--accent-blue)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.1rem' }}>📞</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Call or Text Agent</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>+1 (800) 555-CTRL</div>
                  </div>
                </div>
                {/* Office */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--accent-blue-light)', color: 'var(--accent-blue)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.1rem' }}>🏢</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Agency HQ</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Peachtree St NE, Atlanta, GA 30309</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form side */}
            <div className="glass-card" style={{ padding: '36px', borderRadius: '24px', background: '#ffffff' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '8px' }}>Request a Sales Growth Consultation</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '24px' }}>Leave your contact details and our agency leads will review your store and call you.</p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={handleFormSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="mkt-name" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Your Name</label>
                    <input 
                      type="text" 
                      id="mkt-name" 
                      placeholder="Manoj Varma" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ padding: '10px 14px', border: '1px solid rgba(15, 23, 42, 0.08)', borderRadius: '8px', fontSize: '0.88rem', outline: 'none', background: '#fff' }} 
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="mkt-email" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Business Email</label>
                    <input 
                      type="email" 
                      id="mkt-email" 
                      placeholder="manoj@company.com" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ padding: '10px 14px', border: '1px solid rgba(15, 23, 42, 0.08)', borderRadius: '8px', fontSize: '0.88rem', outline: 'none', background: '#fff' }} 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="mkt-phone" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Phone Number</label>
                    <input 
                      type="tel" 
                      id="mkt-phone" 
                      placeholder="+1 (555) 123-4567" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ padding: '10px 14px', border: '1px solid rgba(15, 23, 42, 0.08)', borderRadius: '8px', fontSize: '0.88rem', outline: 'none', background: '#fff' }} 
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="mkt-budget" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Monthly Ad Budget</label>
                    <select 
                      id="mkt-budget" 
                      required 
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{ padding: '10px 14px', border: '1px solid rgba(15, 23, 42, 0.08)', borderRadius: '8px', fontSize: '0.88rem', outline: 'none', background: '#fff', height: '38px' }}
                    >
                      <option value="" disabled>Select range</option>
                      <option value="under-1k">Under $1,000 / mo</option>
                      <option value="1k-5k">$1,000 - $5,000 / mo</option>
                      <option value="5k-10k">$5,000 - $10,000 / mo</option>
                      <option value="over-10k">Over $10,000 / mo</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="mkt-goal" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Primary Goal</label>
                  <select 
                    id="mkt-goal" 
                    required 
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    style={{ padding: '10px 14px', border: '1px solid rgba(15, 23, 42, 0.08)', borderRadius: '8px', fontSize: '0.88rem', outline: 'none', background: '#fff', height: '38px' }}
                  >
                    <option value="" disabled>Select main goal</option>
                    <option value="foot-traffic">Increase physical store visits (Foot Traffic)</option>
                    <option value="leads">Generate more business leads & inquiries</option>
                    <option value="brand">Build brand awareness & social media following</option>
                    <option value="loyalty">Set up in-store QR loyalty & SMS databases</option>
                    <option value="sales">Double food/product sales via digital menu layouts</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="mkt-message" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Tell us about your business</label>
                  <textarea 
                    id="mkt-message" 
                    placeholder="We operate a cafe in downtown and want to get more local walk-ins..." 
                    rows={3} 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ padding: '10px 14px', border: '1px solid rgba(15, 23, 42, 0.08)', borderRadius: '8px', fontSize: '0.88rem', outline: 'none', background: '#fff', resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '12px', fontSize: '0.9rem', marginTop: '8px', borderRadius: '10px', background: '#0ea5e9' }}>Schedule Consultation</button>
              </form>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer style={{ background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1' }}>
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo.png" alt="Signage CTRL Logo" style={{ height: '44px', width: 'auto' }} />
            <span className="logo-text" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>Signage Ctrl</span>
          </div>
          
          <nav className="footer-nav" aria-label="Footer Links">
            <Link href="/" style={{ color: '#cbd5e1' }}>Digital Signage</Link>
            <a href="#services" style={{ color: '#cbd5e1' }}>Marketing Services</a>
            <a href="#layouts" style={{ color: '#cbd5e1' }}>Visual Layouts</a>
            <a href="#inquiry" style={{ color: '#cbd5e1' }}>Enquire Now</a>
            <Link href="/app" style={{ color: '#cbd5e1' }}>App Link</Link>
          </nav>
          
          <p className="footer-text" style={{ color: '#64748b' }}>
            &copy; 2026 Signage Ctrl Agency. All rights reserved. Cloud Digital Signage & Digital Marketing Solutions.
          </p>
        </footer>
      </div>
    </>
  );
}
