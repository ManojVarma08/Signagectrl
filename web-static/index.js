document.addEventListener('DOMContentLoaded', () => {
  
  // =========================================================================
  // 1. Device Mockup Elements
  // =========================================================================
  const phoneActiveTV = document.getElementById('phone-active-tv');
  const tvOverlayLoc = document.getElementById('tv-overlay-location');
  const tvOverlayPin = document.getElementById('tv-overlay-pin');
  const tvSyncIndicator = document.getElementById('tv-sync-indicator');

  // TV Slides
  const tvSlides = {
    welcome: document.getElementById('tv-slide-welcome'),
    menu: document.getElementById('tv-slide-menu'),
    promo: document.getElementById('tv-slide-promo'),
    upload: document.getElementById('tv-slide-upload')
  };

  // Smartphone Layout Buttons
  const layoutButtons = {
    welcome: document.getElementById('btn-layout-welcome'),
    menu: document.getElementById('btn-layout-menu'),
    promo: document.getElementById('btn-layout-promo')
  };

  // =========================================================================
  // 2. Sync Animation trigger
  // =========================================================================
  function triggerSyncAnimation(callback) {
    // Show syncing pulse
    tvSyncIndicator.classList.add('syncing');
    
    // Simulate minor network sync latency (800ms)
    setTimeout(() => {
      if (callback) callback();
      
      // Keep syncd badge visible for 1s then fade out
      setTimeout(() => {
        tvSyncIndicator.classList.remove('syncing');
      }, 1000);
    }, 600);
  }

  // =========================================================================
  // 3. Layout Switching Action
  // =========================================================================
  function activateLayout(layoutName) {
    // 1. Update active button class in phone controller
    Object.keys(layoutButtons).forEach(name => {
      if (name === layoutName) {
        layoutButtons[name].classList.add('active');
      } else {
        layoutButtons[name].classList.remove('active');
      }
    });

    // 2. Sync changes to TV screen with animation
    triggerSyncAnimation(() => {
      Object.keys(tvSlides).forEach(name => {
        if (name === layoutName) {
          tvSlides[name].classList.add('active');
        } else {
          tvSlides[name].classList.remove('active');
        }
      });
    });
  }

  // Bind layout buttons click events
  Object.keys(layoutButtons).forEach(name => {
    layoutButtons[name].addEventListener('click', () => {
      activateLayout(name);
    });
  });

  // =========================================================================
  // 4. File Upload Simulator
  // =========================================================================
  const uploadBox = document.getElementById('btn-upload-file');
  const progressBar = document.getElementById('upload-progress');
  const progressFill = document.getElementById('upload-progress-fill');
  let isUploading = false;

  uploadBox.addEventListener('click', () => {
    if (isUploading) return;
    
    isUploading = true;
    progressBar.style.display = 'block';
    progressFill.style.width = '0%';

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Complete upload simulation
        setTimeout(() => {
          progressBar.style.display = 'none';
          isUploading = false;
          
          // Switch TV to showing the uploaded asset slide
          // Deactivate layout button highlights
          Object.keys(layoutButtons).forEach(name => {
            layoutButtons[name].classList.remove('active');
          });

          triggerSyncAnimation(() => {
            Object.keys(tvSlides).forEach(name => {
              if (name === 'upload') {
                tvSlides[name].classList.add('active');
              } else {
                tvSlides[name].classList.remove('active');
              }
            });
          });

        }, 300);
      }
      progressFill.style.width = `${progress}%`;
    }, 100);
  });



});
