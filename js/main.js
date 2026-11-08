/**
 * TASTE ENGINE — CLIENT SCRIPTS
 * GSAP, Lenis, Interactive 3D Dice Logo, Spatial Radar HUD, OS-Aware Tabs & Copy Buttons
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lenis Smooth Scroll (if prefers-reduced-motion is false)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lenis = null;

  if (!prefersReducedMotion && typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Agrumea Farm curve
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync with ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // 2. Interactive Rollable Logo Die
  const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  const diceLogos = document.querySelectorAll('.interactive-dice-logo');
  const calibrationRollVal = document.getElementById('live-dice-output');

  const randomConstraints = [
    'Palette: Electric Vermilion on Slate',
    'Extra: No rounded corners anywhere',
    'Type: High-craft Editorial Sans + Marker',
    'Motion: Velocity Skew & WebGL Distortion',
    'Constraint: First screen max 4 elements',
    'Layout: Spatial navigation between rooms'
  ];

  diceLogos.forEach(dice => {
    dice.addEventListener('click', () => {
      // Rotate and roll
      const randomFace = diceFaces[Math.floor(Math.random() * diceFaces.length)];
      dice.style.transform = `scale(1.2) rotate(${Math.floor(Math.random() * 360 + 360)}deg)`;
      setTimeout(() => {
        dice.textContent = randomFace;
        dice.style.transform = 'scale(1) rotate(0deg)';
      }, 250);

      if (calibrationRollVal) {
        const randomRoll = randomConstraints[Math.floor(Math.random() * randomConstraints.length)];
        calibrationRollVal.textContent = randomRoll;
        calibrationRollVal.style.color = '#ff4500';
        setTimeout(() => {
          calibrationRollVal.style.color = '';
        }, 1200);
      }
    });
  });

  // 3. Spatial Zone Radar HUD
  const zones = document.querySelectorAll('[data-zone]');
  const hudTitle = document.getElementById('hud-zone-name');
  const hudPills = document.querySelectorAll('.hud-pill');

  if (zones.length > 0 && hudTitle) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const zoneId = entry.target.getAttribute('data-zone');
          const zoneName = entry.target.getAttribute('data-zone-name') || zoneId;
          hudTitle.textContent = zoneName;

          hudPills.forEach(pill => {
            if (pill.getAttribute('data-target-zone') === zoneId) {
              pill.classList.add('active');
            } else {
              pill.classList.remove('active');
            }
          });
        }
      });
    }, { threshold: 0.25 });

    zones.forEach(z => observer.observe(z));

    hudPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = pill.getAttribute('data-target-zone');
        const targetEl = document.querySelector(`[data-zone="${targetId}"]`);
        if (targetEl) {
          if (lenis) {
            lenis.scrollTo(targetEl, { offset: -60 });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  // 4. One-Click Copy Buttons
  const copyButtons = document.querySelectorAll('.code-copy-btn, .btn-copy');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const codeSnippet = btn.getAttribute('data-clipboard-text') ||
        btn.closest('.code-block-wrap')?.querySelector('pre code')?.innerText ||
        btn.parentElement?.querySelector('code')?.innerText;

      if (codeSnippet) {
        navigator.clipboard.writeText(codeSnippet.trim()).then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = 'COPIED!';
          btn.style.backgroundColor = 'var(--color-accent)';
          btn.style.borderColor = 'var(--color-accent)';
          btn.style.color = '#fff';

          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.backgroundColor = '';
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 2000);
        });
      }
    });
  });

  // 5. OS & Agent Tabs Switcher (with LocalStorage Memory)
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabButtons.length > 0) {
    const savedTab = localStorage.getItem('taste_engine_last_tab');
    if (savedTab) {
      const matchingBtn = document.querySelector(`.tab-btn[data-tab="${savedTab}"]`);
      if (matchingBtn) {
        activateTab(matchingBtn);
      }
    }

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        activateTab(btn);
      });
    });

    function activateTab(activeBtn) {
      const targetTabId = activeBtn.getAttribute('data-tab');
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      activeBtn.classList.add('active');
      const targetPane = document.getElementById(targetTabId);
      if (targetPane) targetPane.classList.add('active');

      localStorage.setItem('taste_engine_last_tab', targetTabId);
    }
  }

  // Subtabs (Mac/Linux vs Windows PowerShell)
  const subtabButtons = document.querySelectorAll('.subtab-btn');
  subtabButtons.forEach(sbtn => {
    sbtn.addEventListener('click', () => {
      const parent = sbtn.closest('.tab-pane');
      const targetId = sbtn.getAttribute('data-subtab');
      parent.querySelectorAll('.subtab-btn').forEach(b => b.classList.remove('active'));
      parent.querySelectorAll('.subtab-pane').forEach(p => p.style.display = 'none');

      sbtn.classList.add('active');
      const pane = parent.querySelector(`#${targetId}`);
      if (pane) pane.style.display = 'block';
    });
  });

  // 6. FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
    });
  });

  // 7. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // 8. Interactive Canvas Background (Subtle interactive displacement dots)
  const canvas = document.getElementById('bg-canvas');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    let mouse = { x: -100, y: -100, vx: 0, vy: 0 };
    let lastMouse = { x: -100, y: -100 };

    window.addEventListener('mousemove', (e) => {
      mouse.vx = e.clientX - lastMouse.x;
      mouse.vy = e.clientY - lastMouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      lastMouse.x = e.clientX;
      lastMouse.y = e.clientY;
    });

    const particles = [];
    for (let i = 0; i < 28; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        size: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    function renderCanvas() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Interaction with mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 5;
          p.y -= (dy / dist) * force * 5;
        }

        ctx.fillStyle = 'rgba(13, 18, 24, 0.12)';
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      requestAnimationFrame(renderCanvas);
    }
    renderCanvas();
  }

  // 8. Screenshot Lightbox Modal
  const screenshotModal = document.getElementById('screenshot-modal');
  const screenshotModalImg = document.getElementById('screenshot-modal-img');
  const screenshotModalCaption = document.getElementById('screenshot-modal-caption');
  const screenshotModalClose = document.querySelector('.screenshot-modal-close');
  const screenshotModalBackdrop = document.querySelector('.screenshot-modal-backdrop');

  if (screenshotModal && screenshotModalImg) {
    document.querySelectorAll('.comparison-slot').forEach(slot => {
      slot.addEventListener('click', () => {
        const img = slot.querySelector('img');
        const cardHeader = slot.closest('.comparison-card')?.querySelector('.comparison-header span:first-child')?.textContent || 'Screenshot Preview';
        if (img) {
          screenshotModalImg.src = img.currentSrc || img.src;
          if (screenshotModalCaption) {
            screenshotModalCaption.textContent = cardHeader + ' (Full View)';
          }
          screenshotModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeScreenshotModal = () => {
      screenshotModal.classList.remove('active');
      document.body.style.overflow = '';
      if (screenshotModalImg) screenshotModalImg.src = '';
    };

    if (screenshotModalClose) screenshotModalClose.addEventListener('click', closeScreenshotModal);
    if (screenshotModalBackdrop) screenshotModalBackdrop.addEventListener('click', closeScreenshotModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && screenshotModal.classList.contains('active')) {
        closeScreenshotModal();
      }
    });
  }
});

