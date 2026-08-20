/**
 * ÖZDEMİR İRİCAN — KOMBİ • KLİMA • SIHHI TESİSAT | SAKARYA
 * Premium Editorial Technical Service Platform
 * Pure Vanilla JavaScript — No Frameworks, No External Libraries
 */

// Central Configuration
const PHONE_NUMBER = "905383273843";
const PHONE_DISPLAY = "0538 327 38 43";
const DEFAULT_WHATSAPP_MSG = "Merhaba Özdemir Bey, klima/kombi/tesisat hizmeti hakkında bilgi almak istiyorum.";

document.addEventListener('DOMContentLoaded', function () {
  initHeader();
  initRevealAnimations();
  initImageParallax();
  initMicroAnimations();
  initContactLinks();
  initYear();
  initImageFallbacks();
  initScrollProgress();
  initCursorFollower();
  initCounterAnimation();
  initSmoothAnchorLinks();
  initPriceModal();
  initFAQAccordion();
  initMobileMenu();
  initPreloader();
});

/**
 * Header sticky scroll behavior
 */
function initHeader() {
  var header = document.getElementById('site-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Scroll reveal animations using IntersectionObserver
 * Supports: .reveal, .reveal-left, .reveal-right, .reveal-scale
 */
function initRevealAnimations() {
  var reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!reveals.length) return;

  var observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  };

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(function (el) { observer.observe(el); });
}

/**
 * Controlled Desktop Mouse Parallax for Images
 */
function initImageParallax() {
  if (window.innerWidth < 900 || window.matchMedia('(pointer: coarse)').matches) return;

  var parallaxImages = document.querySelectorAll('[data-parallax]');
  if (!parallaxImages.length) return;

  var mouseX = 0;
  var mouseY = 0;
  var currentX = 0;
  var currentY = 0;
  var rafId = null;

  window.addEventListener('mousemove', function (e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    if (!rafId) {
      rafId = requestAnimationFrame(updateParallax);
    }
  }, { passive: true });

  function updateParallax() {
    currentX += (mouseX * 8 - currentX) * 0.06;
    currentY += (mouseY * 5 - currentY) * 0.06;
    var rotate = currentX * 0.05;

    parallaxImages.forEach(function (img) {
      img.style.transform = 'translate3d(' + currentX.toFixed(2) + 'px, ' + currentY.toFixed(2) + 'px, 0) rotate(' + rotate.toFixed(2) + 'deg)';
    });

    rafId = requestAnimationFrame(updateParallax);
  }
}

/**
 * Performance optimization for CSS/SVG micro-animations
 */
function initMicroAnimations() {
  var animatedContainers = document.querySelectorAll('.airflow-container, .heathaze-container, .pipe-svg-container');
  if (!animatedContainers.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var state = entry.isIntersecting ? 'running' : 'paused';
      entry.target.style.animationPlayState = state;
      var children = entry.target.querySelectorAll('*');
      children.forEach(function (child) { child.style.animationPlayState = state; });
    });
  }, { threshold: 0.05 });

  animatedContainers.forEach(function (el) { observer.observe(el); });
}

/**
 * Dynamic contact link generation
 */
function initContactLinks() {
  var encodedMsg = encodeURIComponent(DEFAULT_WHATSAPP_MSG);
  var waUrl = 'https://wa.me/' + PHONE_NUMBER + '?text=' + encodedMsg;
  var telUrl = 'tel:+' + PHONE_NUMBER;

  document.querySelectorAll('.whatsapp-link').forEach(function (el) {
    el.href = waUrl;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  document.querySelectorAll('.phone-link').forEach(function (el) {
    el.href = telUrl;
  });

  document.querySelectorAll('.phone-display-text').forEach(function (el) {
    el.textContent = PHONE_DISPLAY;
  });
}

/**
 * Dynamic current year
 */
function initYear() {
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Graceful Image Fallbacks
 */
function initImageFallbacks() {
  document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('error', function () {
      var parent = this.parentElement;
      if (!parent) return;

      var altText = this.alt || 'Görsel yüklenemedi';
      var placeholder = document.createElement('div');
      placeholder.className = 'img-fallback-placeholder';
      placeholder.innerHTML =
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>' +
          '<circle cx="8.5" cy="8.5" r="1.5"></circle>' +
          '<polyline points="21 15 16 10 5 21"></polyline>' +
        '</svg>' +
        '<span>' + altText + '</span>';

      this.style.display = 'none';
      parent.appendChild(placeholder);
    });
  });
}

/**
 * Scroll progress bar at the top of the page
 */
function initScrollProgress() {
  var bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  function updateProgress() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/**
 * Custom cursor follower (desktop only, mix-blend-mode: difference)
 */
function initCursorFollower() {
  if (window.innerWidth < 900 || window.matchMedia('(pointer: coarse)').matches) return;

  var dot = document.querySelector('.cursor-dot');
  if (!dot) return;

  var posX = 0;
  var posY = 0;
  var curX = 0;
  var curY = 0;

  window.addEventListener('mousemove', function (e) {
    posX = e.clientX;
    posY = e.clientY;
    dot.classList.add('is-active');
  }, { passive: true });

  // Enlarge on interactive elements
  var interactives = document.querySelectorAll('a, button, .service-row, .problem-row');
  interactives.forEach(function (el) {
    el.addEventListener('mouseenter', function () { dot.classList.add('is-hovering'); });
    el.addEventListener('mouseleave', function () { dot.classList.remove('is-hovering'); });
  });

  function animate() {
    curX += (posX - curX) * 0.12;
    curY += (posY - curY) * 0.12;
    dot.style.left = curX + 'px';
    dot.style.top = curY + 'px';
    requestAnimationFrame(animate);
  }

  animate();
}

/**
 * Counter animation for trust band numbers
 */
function initCounterAnimation() {
  var counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(function (el) { observer.observe(el); });

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 2000;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  }
}

/**
 * Smooth anchor link scrolling with offset
 */
function initSmoothAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#fiyatlar') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      var offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
  });
}

/**
 * Fiyat Listesi Popup Modal handler
 */
function initPriceModal() {
  var modal = document.getElementById('price-modal');
  if (!modal) return;

  var triggers = document.querySelectorAll('.price-modal-trigger');
  var closeBtn = modal.querySelector('.price-modal-close');
  var overlay = modal.querySelector('.price-modal-overlay');

  function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  triggers.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });
}

/**
 * FAQ Accordion Expansion Handler
 */
function initFAQAccordion() {
  var faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(function (item) {
    var trigger = item.querySelector('.faq-trigger');
    var content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', function () {
      var isActive = item.classList.contains('is-active');

      // Close all other items for a smooth single active state
      faqItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('is-active');
          var otherTrigger = otherItem.querySelector('.faq-trigger');
          var otherContent = otherItem.querySelector('.faq-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (isActive) {
        item.classList.remove('is-active');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('is-active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/**
 * Mobile Hamburger Drawer Menu Toggle
 */
function initMobileMenu() {
  var toggleBtn = document.getElementById('mobile-menu-toggle');
  var closeBtn = document.getElementById('mobile-menu-close');
  var drawer = document.getElementById('mobile-menu-drawer');
  var navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.add('is-open');
    toggleBtn.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('is-open');
    toggleBtn.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', function () {
    if (drawer.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
}

/**
 * Water Drop Liquid Preloader Screen Handler
 * Only displays on:
 * 1) First visit to homepage in current session
 * 2) Page reload (F5 / browser refresh)
 * Skips instantly on internal page transitions back to homepage
 */
function initPreloader() {
  var preloader = document.getElementById('preloader');
  if (!preloader) return;

  var isReload = false;
  try {
    var navEntries = window.performance && performance.getEntriesByType && performance.getEntriesByType('navigation');
    if (navEntries && navEntries.length > 0) {
      isReload = navEntries[0].type === 'reload';
    } else if (window.performance && window.performance.navigation) {
      isReload = window.performance.navigation.type === 1;
    }
  } catch (e) {
    isReload = false;
  }

  var hasVisited = false;
  try {
    hasVisited = sessionStorage.getItem('has_visited_home') === 'true';
  } catch (e) {
    hasVisited = false;
  }

  var shouldShow = !hasVisited || isReload;

  if (!shouldShow) {
    preloader.style.display = 'none';
    preloader.classList.add('is-hidden');
    return;
  }

  try {
    sessionStorage.setItem('has_visited_home', 'true');
  } catch (e) {}

  // Fade out preloader 1.1s after page load (allowing 1s liquid fill + wave motion to complete, 0.4s fade-out -> 1.5s total)
  function hidePreloader() {
    setTimeout(function () {
      preloader.classList.add('is-hidden');
    }, 1100);
  }

  if (document.readyState === 'complete') {
    hidePreloader();
  } else {
    window.addEventListener('load', hidePreloader);
    // Fallback safety timeout if load event is delayed
    setTimeout(hidePreloader, 1300);
  }
}
