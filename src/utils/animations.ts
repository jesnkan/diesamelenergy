import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // 1. Scroll Progress Bar at the top of the viewport
  const progressBar = document.getElementById('scroll-progress-bar');
  const updateScrollProgress = () => {
    if (progressBar) {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTotal > 0 ? (window.scrollY / scrollTotal) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  };
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // 2. High-Reliability IntersectionObserver for Instant Visual Feedback
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Observe all animatable elements across the DOM
  const targets = document.querySelectorAll('.anim-reveal, .anim-stagger-parent, .de-section');
  targets.forEach((t) => revealObserver.observe(t));

  // 3. Stagger entrance for grids
  const staggerParents = document.querySelectorAll('.reveal-stagger-parent, .anim-stagger-parent');
  staggerParents.forEach((parent) => {
    const items = parent.querySelectorAll('.reveal-stagger-item, .anim-stagger-child');
    if (items.length > 0) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: parent,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  });

  // 4. Parallax Scrub on Hero & Capability Photography Frames
  const parallaxWraps = document.querySelectorAll('.cinematic-reveal-wrap');
  parallaxWraps.forEach((wrap) => {
    const img = wrap.querySelector('img');
    if (img) {
      gsap.fromTo(
        img,
        { yPercent: -5, scale: 1.05 },
        {
          yPercent: 5,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );
    }
  });

  // 5. Individual Reveal Elements (.gsap-reveal)
  const revealElements = document.querySelectorAll('.gsap-reveal');
  revealElements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // 6. Recalculate ScrollTrigger on window load & resize
  window.addEventListener('load', () => ScrollTrigger.refresh());
  setTimeout(() => ScrollTrigger.refresh(), 400);
};

export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh();
};
