import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MarketingPage() {

  return (
    <>
      <Head>
        <title>Digital Marketing & Sales Growth Solutions | Signage Ctrl Agency</title>
        <meta name="description" content="Explode your sales and foot traffic with professional digital marketing, local SEO, PPC advertising, and optimized digital signage layouts. Request a free consultation." />
        <meta name="keywords" content="digital marketing agency, local SEO, sales growth, signage marketing, retail marketing, restaurant marketing, lead generation, conversion rate optimization" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logo.png" />
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
          `}</style>

          {/* Marketing Hero Section */}
          <section className="marketing-hero">
            <div className="badge-gold">PRO DIGITAL MARKETING SERVICES</div>
            <h1>Dominate Local Markets. Increase Foot Traffic. Double Sales.</h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '700px', lineHeight: '1.6' }}>
              Traditional signage informs, but conversion-focused marketing sells. We combine smart cloud displays with premium SEO, local ad targeting, and customer loyalty funnels to generate direct ROI for your storefront.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
              <Link href="/app" className="btn btn-primary" style={{ background: '#0ea5e9', borderRadius: '30px', padding: '14px 32px' }}>
                Launch App
              </Link>
              <a href="#services" className="btn btn-secondary" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                Our Services
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
