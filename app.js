/* ============================================
   SHOE STRIDE — Scattered Objects + Video on Scroll
   ============================================ */

const imgBase = "images";

// Product data (for the grid)
const productData = [
  { name: "Air Jordan 1 Mid", brand: "Nike", price: "KSh 18,500", img: `${imgBase}/nike-1.webp`, hover: `${imgBase}/nike-2.webp`, category: "nike", tag: "New", layout: "featured" },
  { name: "Air Jordan 4 RM", brand: "Nike", price: "KSh 22,000", img: `${imgBase}/nike-3.webp`, hover: null, category: "nike", tag: null, layout: "normal" },
  { name: "Air Max 90 PRM", brand: "Nike", price: "KSh 16,500", img: `${imgBase}/nike-4.webp`, hover: null, category: "nike", tag: null, layout: "normal" },
  { name: "Air Max DN8", brand: "Nike", price: "KSh 19,000", img: `${imgBase}/nike-5.webp`, hover: null, category: "nike", tag: null, layout: "tall" },
  { name: "Air Vapormax Plus", brand: "Nike", price: "KSh 21,500", img: `${imgBase}/nike-6.webp`, hover: null, category: "nike", tag: null, layout: "normal" },
  { name: "ACG Zegama Trail", brand: "Nike", price: "KSh 24,000", img: `${imgBase}/nike-7.webp`, hover: null, category: "nike", tag: null, layout: "wide" },
  { name: "Air Max 95 Big Bubble", brand: "Nike", price: "KSh 20,000", img: `${imgBase}/nike-8.webp`, hover: null, category: "nike", tag: null, layout: "normal" },
  { name: "Nike Ava X", brand: "Nike", price: "KSh 14,500", img: `${imgBase}/nike-9.webp`, hover: null, category: "nike", tag: "Sale", layout: "normal" },
  { name: "Shox R4 SE Fade", brand: "Nike", price: "KSh 17,500", img: `${imgBase}/nike-10.webp`, hover: null, category: "nike", tag: null, layout: "normal" },
  { name: "Vomero 18", brand: "Nike", price: "KSh 15,000", img: `${imgBase}/nike-11.webp`, hover: null, category: "nike", tag: null, layout: "normal" },
  { name: "Phantom 6", brand: "Nike", price: "KSh 16,000", img: `${imgBase}/nike-12.webp`, hover: null, category: "nike", tag: null, layout: "normal" },

  { name: "Samba OG Toy Story", brand: "Adidas", price: "KSh 15,500", img: `${imgBase}/adidas-1.webp`, hover: null, category: "adidas", tag: "New", layout: "normal" },
  { name: "Adizero Adios Pro 4", brand: "Adidas", price: "KSh 28,000", img: `${imgBase}/adidas-2.webp`, hover: null, category: "adidas", tag: null, layout: "normal" },
  { name: "Handball Spezial", brand: "Adidas", price: "KSh 14,000", img: `${imgBase}/adidas-3.webp`, hover: `${imgBase}/adidas-6.webp`, category: "adidas", tag: null, layout: "wide" },
  { name: "Handball Spezial", brand: "Adidas", price: "KSh 14,000", img: `${imgBase}/adidas-4.webp`, hover: `${imgBase}/adidas-7.webp`, category: "adidas", tag: null, layout: "normal" },
  { name: "Runfalcon 6", brand: "Adidas", price: "KSh 9,500", img: `${imgBase}/adidas-8.webp`, hover: `${imgBase}/adidas-9.webp`, category: "adidas", tag: "Sale", layout: "normal" },
  { name: "Samba OG Brown", brand: "Adidas", price: "KSh 16,000", img: `${imgBase}/adidas-10.webp`, hover: null, category: "adidas", tag: null, layout: "tall" },
  { name: "Hyperboost Edge", brand: "Adidas", price: "KSh 13,000", img: `${imgBase}/adidas-11.webp`, hover: null, category: "adidas", tag: null, layout: "normal" },
  { name: "Training Spezial", brand: "Adidas", price: "KSh 12,000", img: `${imgBase}/adidas-12.webp`, hover: null, category: "adidas", tag: null, layout: "normal" },

  { name: "MB.05 Lo Team", brand: "Puma", price: "KSh 17,000", img: `${imgBase}/puma-1.webp`, hover: `${imgBase}/puma-2.webp`, category: "puma", tag: null, layout: "normal" },
  { name: "Scuderia Ferrari Suede", brand: "Puma", price: "KSh 19,500", img: `${imgBase}/puma-3.webp`, hover: `${imgBase}/puma-4.webp`, category: "puma", tag: null, layout: "normal" },
  { name: "Speedcat Sneakers", brand: "Puma", price: "KSh 14,500", img: `${imgBase}/puma-5.webp`, hover: `${imgBase}/puma-6.webp`, category: "puma", tag: "New", layout: "featured" },
  { name: "Deviate NITRO Elite", brand: "Puma", price: "KSh 22,000", img: `${imgBase}/puma-7.webp`, hover: null, category: "puma", tag: null, layout: "normal" },
  { name: "Velocity NITRO 5", brand: "Puma", price: "KSh 16,000", img: `${imgBase}/puma-8.webp`, hover: null, category: "puma", tag: null, layout: "normal" },
  { name: "MagMax NITRO 2", brand: "Puma", price: "KSh 18,500", img: `${imgBase}/puma-9.webp`, hover: null, category: "puma", tag: null, layout: "normal" },
];

// Scattered objects config (positions, rotations, sizes)
const scatteredObjects = [
  { img: `${imgBase}/nike-1.webp`, x: 5, y: 15, size: 180, rotate: -12, speed: 0.3 },
  { img: `${imgBase}/adidas-3.webp`, x: 85, y: 25, size: 160, rotate: 8, speed: 0.5 },
  { img: `${imgBase}/puma-5.webp`, x: 10, y: 55, size: 200, rotate: -5, speed: 0.4 },
  { img: `${imgBase}/nike-7.webp`, x: 90, y: 65, size: 170, rotate: 15, speed: 0.6 },
  { img: `${imgBase}/adidas-10.webp`, x: 50, y: 35, size: 140, rotate: -20, speed: 0.35 },
  { img: `${imgBase}/puma-3.webp`, x: 75, y: 80, size: 190, rotate: 10, speed: 0.45 },
  { img: `${imgBase}/nike-5.webp`, x: 20, y: 85, size: 150, rotate: -8, speed: 0.55 },
  { img: `${imgBase}/adidas-1.webp`, x: 60, y: 10, size: 130, rotate: 12, speed: 0.25 },
];

// ============================================
// LENIS SMOOTH SCROLL
// ============================================
let lenis;
function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);
}

// ============================================
// SCATTERED FLOATING OBJECTS
// ============================================
function initScatteredObjects() {
  const container = document.getElementById("scatteredObjects");
  if (!container) return;

  scatteredObjects.forEach((obj, i) => {
    const el = document.createElement("div");
    el.className = "scattered-obj";
    el.style.cssText = `
      left: ${obj.x}%;
      top: ${obj.y}%;
      width: ${obj.size}px;
      height: ${obj.size}px;
      transform: rotate(${obj.rotate}deg);
    `;
    el.innerHTML = `<img src="${obj.img}" alt="" loading="lazy">`;
    container.appendChild(el);

    // Parallax on scroll
    gsap.to(el, {
      y: () => -200 * obj.speed,
      rotation: obj.rotate + (Math.random() > 0.5 ? 10 : -10),
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Mouse follow (subtle)
    document.addEventListener("mousemove", (e) => {
      const mx = (e.clientX / window.innerWidth - 0.5) * 20 * obj.speed;
      const my = (e.clientY / window.innerHeight - 0.5) * 20 * obj.speed;
      gsap.to(el, { x: mx, y: my, duration: 1.5, ease: "power2.out" });
    });
  });
}

// ============================================
// VIDEO ON SCROLL
// ============================================
function initVideoOnScroll() {
  const videoWrap = document.getElementById("videoScrollWrap");
  const video = document.getElementById("scrollVideo");
  if (!videoWrap || !video) return;

  // Play/pause based on visibility
  ScrollTrigger.create({
    trigger: videoWrap,
    start: "top bottom",
    end: "bottom top",
    onEnter: () => video.play(),
    onLeave: () => video.pause(),
    onEnterBack: () => video.play(),
    onLeaveBack: () => video.pause(),
  });

  // Parallax on the video
  gsap.to(video, {
    scale: 1.1,
    scrollTrigger: {
      trigger: videoWrap,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    }
  });
}

// ============================================
// ADAPTIVE NAV (dark/light detection)
// ============================================
function initAdaptiveNav() {
  const header = document.querySelector(".header");
  if (!header) return;

  // Start on dark (hero is dark)
  header.classList.add("on-dark");

  // Detect section background via Intersection Observer
  const sections = document.querySelectorAll(".section-dark, .section-light");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("section-dark")) {
          header.classList.remove("on-light");
          header.classList.add("on-dark");
        } else if (entry.target.classList.contains("section-light")) {
          header.classList.remove("on-dark");
          header.classList.add("on-light");
        }
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));

  // Scrolled state
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// ============================================
// PARALLAX SECTIONS (smooth scroll-driven depth)
// ============================================
function initParallax() {
  // Hero parallax
  gsap.to(".hero-content", {
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.5 },
    y: -120, opacity: 0.2,
  });

  // Video section parallax
  gsap.to(".video-scroll-section video", {
    scrollTrigger: { trigger: ".video-scroll-section", start: "top bottom", end: "bottom top", scrub: 1 },
    y: -60,
  });

  // Blob parallax
  gsap.to(".blob-transition", {
    scrollTrigger: { trigger: ".blob-transition", start: "top bottom", end: "bottom top", scrub: 1 },
    y: -40,
  });

  // Carousel section parallax
  gsap.from(".carousel-section .section-label", {
    scrollTrigger: { trigger: ".carousel-section", start: "top 80%" },
    y: 30, opacity: 0, duration: 0.8,
  });

  // Gallery parallax
  gsap.from(".gallery-header", {
    scrollTrigger: { trigger: ".gallery-section", start: "top 75%" },
    y: 40, opacity: 0, duration: 0.8,
  });

  // Product grid stagger
  gsap.from(".product-grid-section .collections-header", {
    scrollTrigger: { trigger: ".product-grid-section", start: "top 80%" },
    y: 30, opacity: 0, duration: 0.8,
  });

  // Inquiry parallax
  gsap.from(".inquiry-inner", {
    scrollTrigger: { trigger: ".inquiry", start: "top 80%" },
    y: 50, opacity: 0, duration: 1,
  });

  // Smooth section fade-in on scroll
  gsap.utils.toArray("section").forEach(sec => {
    gsap.from(sec, {
      scrollTrigger: { trigger: sec, start: "top 95%", end: "top 60%", scrub: 0.5 },
      opacity: 0.7,
    });
  });
}
function initCursor() {
  if (window.innerWidth < 768) return;
  const dot = document.getElementById("cursorDot");
  const label = document.getElementById("cursorLabel");
  let mx = 0, my = 0, cx = 0, cy = 0;
  let currentTheme = "dark";

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    if (label) {
      label.style.left = mx + "px";
      label.style.top = (my + 25) + "px";
    }
  });

  function update() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    dot.style.left = cx + "px";
    dot.style.top = cy + "px";
    requestAnimationFrame(update);
  }
  update();

  // Detect section theme under cursor
  function getSectionTheme(x, y) {
    const el = document.elementFromPoint(x, y);
    if (!el) return "dark";
    if (el.closest(".section-light")) return "light";
    return "dark";
  }

  document.addEventListener("mousemove", (e) => {
    const theme = getSectionTheme(e.clientX, e.clientY);
    if (theme !== currentTheme) {
      currentTheme = theme;
      dot.classList.remove("on-dark", "on-light");
      dot.classList.add("on-" + theme);
      if (label) {
        label.classList.remove("on-dark", "on-light");
        label.classList.add("on-" + theme);
      }
    }
  });

  // Element-specific cursor states
  const interactions = [
    { selector: "a, button, .filter-btn, .gallery-btn, .hero-cta", cursor: "hovering", label: "" },
    { selector: ".product-card, .carousel-card", cursor: "hovering", label: "View" },
    { selector: ".gallery-card", cursor: "hovering", label: "Explore" },
    { selector: ".gallery-swiper", cursor: "drag-hover", label: "Drag" },
    { selector: ".scattered-obj", cursor: "hovering", label: "" },
    { selector: "h1, h2, h3, .split-text, .hero-title, .section-heading", cursor: "text-hover", label: "" },
  ];

  interactions.forEach(({ selector, cursor: cls, label: lbl }) => {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener("mouseenter", () => {
        dot.className = dot.className.replace(/hovering|text-hover|drag-hover/g, "").trim();
        dot.classList.add(cls);
        if (lbl && label) {
          label.textContent = lbl;
          label.classList.add("visible");
        }
      });
      el.addEventListener("mouseleave", () => {
        dot.classList.remove(cls);
        if (label) label.classList.remove("visible");
      });
    });
  });

  // Set initial theme
  dot.classList.add("on-dark");
  if (label) label.classList.add("on-dark");
}

// ============================================
// PRELOADER
// ============================================
function initPreloader() {
  const fill = document.getElementById("preloaderFill");
  const pct = document.getElementById("preloaderPercent");
  const preloader = document.getElementById("preloader");
  let progress = 0;

  function tick() {
    progress += Math.random() * 8 + 3;
    if (progress >= 100) {
      progress = 100;
      pct.textContent = "100%";
      fill.style.width = "100%";
      setTimeout(() => {
        preloader.classList.add("done");
        document.body.style.overflow = "";
        initAnimations();
      }, 500);
      return;
    }
    pct.textContent = Math.floor(progress) + "%";
    fill.style.width = progress + "%";
    setTimeout(tick, 30 + Math.random() * 50);
  }
  tick();
}

// ============================================
// SPLIT TEXT
// ============================================
function splitTextElements() {
  document.querySelectorAll(".split-text, .section-heading, .collections-title, .inquiry-title, .video-text").forEach(el => {
    const html = el.innerHTML;
    const lines = html.split(/<br\s*\/?>/i);
    el.innerHTML = lines.map(line => {
      const words = line.trim().split(/\s+/);
      return '<span class="split-line" style="overflow:hidden;display:block">' +
        words.map(w => `<span class="split-word" style="display:inline-block;transform:translateY(110%)">${w}</span>`).join(' ') +
        '</span>';
    }).join('');
  });

  document.querySelectorAll(".hero-title .split-line").forEach(line => {
    const text = line.textContent;
    line.innerHTML = `<span class="split-word" style="display:inline-block;transform:translateY(110%)">${text}</span>`;
  });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  const heroTl = gsap.timeline({ delay: 0.3 });
  heroTl.to(".hero-tag", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0)
    .to(".hero-title .split-word", { y: 0, duration: 1.2, stagger: 0.12, ease: "power3.out" }, 0.2)
    .to(".hero-sub", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.8)
    .to(".hero-cta-wrap", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 1);

  // Split text reveals
  gsap.utils.toArray(".split-text .split-word, .section-heading .split-word, .collections-title .split-word, .inquiry-title .split-word, .video-text .split-word").forEach(word => {
    gsap.to(word, {
      scrollTrigger: { trigger: word.closest(".split-line") || word, start: "top 90%" },
      y: 0, duration: 0.8, ease: "power3.out",
    });
  });

  // Section labels
  gsap.utils.toArray(".section-label").forEach(el => {
    gsap.from(el, { scrollTrigger: { trigger: el, start: "top 90%" }, opacity: 0, x: -20, duration: 0.6, ease: "power2.out" });
  });

  // Product grid items
  gsap.utils.toArray(".product-card").forEach((item, i) => {
    gsap.from(item, { scrollTrigger: { trigger: item, start: "top 92%" }, opacity: 0, y: 30, scale: 0.97, duration: 0.5, delay: (i % 4) * 0.06, ease: "power2.out" });
  });

  // Carousel cards
  gsap.utils.toArray(".carousel-card").forEach((card, i) => {
    gsap.from(card, { scrollTrigger: { trigger: card, start: "top 95%" }, opacity: 0, y: 20, duration: 0.5, delay: i * 0.04, ease: "power2.out" });
  });

  // Hero parallax
  gsap.to(".hero-content", {
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
    y: -80, opacity: 0.3,
  });
}

// ============================================
// MARQUEE
// ============================================
function initMarquee() {
  const track = document.getElementById("marqueeTrack");
  if (!track) return;
  const discounts = [
    { brand: "Nike", name: "Air Max", disc: "30% OFF" },
    { brand: "Adidas", name: "Samba OG", disc: "25% OFF" },
    { brand: "Puma", name: "Speedcat", disc: "40% OFF" },
    { brand: "Nike", name: "Vomero", disc: "20% OFF" },
  ];
  const items = [...discounts, ...discounts, ...discounts];
  track.innerHTML = items.map(d =>
    `<span class="marquee-item">${d.brand} ${d.name} <span class="pct">${d.disc}</span></span>`
  ).join("");
}

// ============================================
// SWIPER CAROUSEL
// ============================================
function initSwiperCarousel() {
  const wrapper = document.getElementById("carouselWrapper");
  if (!wrapper) return;

  const carouselItems = [
    { name: "Air Jordan 1 Mid", brand: "Nike", img: `${imgBase}/nike-1.webp` },
    { name: "Air Max DN8", brand: "Nike", img: `${imgBase}/nike-5.webp` },
    { name: "Samba OG Toy Story", brand: "Adidas", img: `${imgBase}/adidas-1.webp` },
    { name: "Handball Spezial", brand: "Adidas", img: `${imgBase}/adidas-3.webp` },
    { name: "Speedcat", brand: "Puma", img: `${imgBase}/puma-5.webp` },
    { name: "MB.05 Lo", brand: "Puma", img: `${imgBase}/puma-1.webp` },
    { name: "Air Vapormax Plus", brand: "Nike", img: `${imgBase}/nike-6.webp` },
    { name: "Samba OG Brown", brand: "Adidas", img: `${imgBase}/adidas-10.webp` },
  ];

  carouselItems.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="carousel-card">
        <div class="carousel-card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
        </div>
        <div class="carousel-card-body">
          <div class="carousel-card-divider"></div>
          <div class="carousel-card-brand">${item.brand}</div>
          <div class="carousel-card-name">${item.name}</div>
        </div>
      </div>
    `;
    wrapper.appendChild(slide);
  });

  new Swiper(".carousel-swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: { enabled: true, momentum: true, momentumRatio: 0.5 },
    grabCursor: true,
    breakpoints: {
      320: { slidesPerView: 1.5, spaceBetween: 12 },
      768: { slidesPerView: 3, spaceBetween: 16 },
      1024: { slidesPerView: 4, spaceBetween: 16 },
      1440: { slidesPerView: 5, spaceBetween: 16 },
    },
  });

  const hint = document.getElementById("dragHint");
  const swiperEl = document.querySelector(".carousel-swiper");
  if (swiperEl && hint) {
    swiperEl.addEventListener("mousedown", () => hint.classList.add("hidden"), { once: true });
    swiperEl.addEventListener("touchstart", () => hint.classList.add("hidden"), { once: true });
  }
}

// ============================================
// GALLERY
// ============================================
const galleryImages = [
  { img: `${imgBase}/nike-1.jpg`, name: "Air Jordan 1 Mid", brand: "Nike" },
  { img: `${imgBase}/adidas-3.jpg`, name: "Handball Spezial", brand: "Adidas" },
  { img: `${imgBase}/puma-5.jpg`, name: "Speedcat", brand: "Puma" },
  { img: `${imgBase}/nike-7.jpg`, name: "ACG Zegama Trail", brand: "Nike" },
  { img: `${imgBase}/adidas-10.jpg`, name: "Samba OG", brand: "Adidas" },
  { img: `${imgBase}/puma-3.jpg`, name: "Scuderia Ferrari", brand: "Puma" },
  { img: `${imgBase}/nike-5.jpg`, name: "Air Max DN8", brand: "Nike" },
  { img: `${imgBase}/adidas-1.jpg`, name: "Samba OG Toy Story", brand: "Adidas" },
  { img: `${imgBase}/puma-7.jpg`, name: "Deviate NITRO", brand: "Puma" },
  { img: `${imgBase}/nike-10.jpg`, name: "Shox R4", brand: "Nike" },
  { img: `${imgBase}/adidas-11.jpg`, name: "Hyperboost Edge", brand: "Adidas" },
  { img: `${imgBase}/puma-8.jpg`, name: "Velocity NITRO 5", brand: "Puma" },
];

let gallerySwiper;
function initGallery() {
  const wrapper = document.getElementById("galleryWrapper");
  if (!wrapper) return;

  // Duplicate for infinite conveyor
  const allItems = [...galleryImages, ...galleryImages];
  allItems.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide gallery-slide";
    slide.innerHTML = `
      <div class="gallery-card">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="gallery-card-acrylic">
          <div class="gallery-card-brand">${item.brand}</div>
          <div class="gallery-card-name">${item.name}</div>
        </div>
      </div>
    `;
    wrapper.appendChild(slide);
  });

  gallerySwiper = new Swiper(".gallery-swiper", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    speed: 800,
    grabCursor: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: {
      enabled: true,
      momentum: false,
    },
    breakpoints: {
      320: { slidesPerView: 1.5, spaceBetween: 12 },
      768: { slidesPerView: 2.5, spaceBetween: 20 },
      1024: { slidesPerView: 3.5, spaceBetween: 24 },
      1440: { slidesPerView: 4.5, spaceBetween: 28 },
    },
  });

  // Pause autoplay on hover over any card
  const gallerySwiperEl = document.querySelector(".gallery-swiper");
  const galleryContainer = document.querySelector(".gallery-conveyor");
  if (galleryContainer && gallerySwiper) {
    galleryContainer.addEventListener("mouseenter", () => gallerySwiper.autoplay.stop());
    galleryContainer.addEventListener("mouseleave", () => gallerySwiper.autoplay.start());
  }

  // 3D scroll cascade — cards fly in from bottom-right to top-left
  const gallerySection = document.querySelector(".gallery-section");
  if (gallerySection) {
    const cards = gallerySection.querySelectorAll(".gallery-card");

    // Set initial 3D state
    cards.forEach((card, i) => {
      card.classList.add("scroll-3d");
      card.style.transitionDelay = (i % 4) * 0.08 + "s";
    });

    // Animate on scroll
    ScrollTrigger.create({
      trigger: gallerySection,
      start: "top 80%",
      end: "top 20%",
      onUpdate: (self) => {
        const p = self.progress;
        cards.forEach((card, i) => {
          const cardProgress = Math.max(0, Math.min(1, (p * cards.length - i) / 3));
          if (cardProgress > 0.1) {
            card.classList.add("active");
          } else {
            card.classList.remove("active");
          }
        });
      }
    });

    // Parallax depth on scroll
    gsap.to(gallerySection, {
      scrollTrigger: {
        trigger: gallerySection,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      rotateX: 3,
      rotateY: -2,
      transformPerspective: 1200,
    });
  }
}

// ============================================
// MORPHING BLOB (between video and carousel)
// ============================================
function initBlobMorph() {
  const blob = document.getElementById("blobTransition");
  const path1 = document.getElementById("blobPath1");
  const path2 = document.getElementById("blobPath2");
  const path3 = document.getElementById("blobPath3");
  if (!blob || !path1) return;

  // Blob shape keyframes (organic random shapes)
  const shapes = {
    blob1: [
      "M720,150 C900,100 1100,200 1200,300 C1300,400 1200,500 900,480 C600,460 400,500 250,400 C100,300 200,150 400,120 C500,100 620,180 720,150 Z",
      "M720,120 C950,80 1150,180 1250,280 C1350,380 1250,520 950,510 C650,500 350,520 200,420 C50,320 150,120 380,90 C520,70 600,140 720,120 Z",
      "M720,180 C880,90 1120,150 1280,250 C1400,350 1300,480 1000,500 C700,520 400,480 220,380 C40,280 100,140 350,100 C520,70 640,200 720,180 Z",
      "M720,100 C980,60 1200,160 1300,300 C1380,420 1200,540 900,530 C600,520 300,540 150,400 C0,260 200,100 450,80 C580,70 660,130 720,100 Z",
    ],
    blob2: [
      "M720,200 C850,140 1050,180 1180,280 C1310,380 1250,480 1000,490 C750,500 500,490 320,400 C140,310 200,180 400,150 C550,130 650,220 720,200 Z",
      "M720,160 C920,100 1140,200 1260,320 C1360,430 1200,530 920,520 C640,510 360,530 200,420 C40,310 120,150 380,110 C540,85 640,180 720,160 Z",
      "M720,190 C890,110 1100,170 1240,290 C1350,400 1260,510 980,510 C700,510 420,500 260,400 C100,300 160,160 380,120 C540,90 650,210 720,190 Z",
      "M720,140 C960,80 1180,190 1290,310 C1380,420 1220,540 940,530 C660,520 380,540 210,410 C40,280 140,130 400,100 C560,75 660,160 720,140 Z",
    ],
    blob3: [
      "M720,220 C830,160 1020,200 1160,290 C1300,380 1240,470 1000,480 C760,490 520,480 340,390 C160,300 210,190 400,160 C540,140 660,240 720,220 Z",
      "M720,170 C900,110 1100,200 1230,310 C1340,420 1230,520 960,510 C690,500 410,520 240,410 C70,300 150,160 380,120 C540,90 640,190 720,170 Z",
      "M720,200 C870,130 1080,180 1220,290 C1340,400 1250,500 990,500 C730,500 460,500 290,400 C120,300 180,170 400,130 C560,100 660,220 720,200 Z",
      "M720,150 C940,90 1160,180 1280,300 C1370,410 1210,530 930,520 C650,510 370,530 200,400 C30,270 130,130 390,100 C550,75 650,170 720,150 Z",
    ],
  };

  // Morph animation timeline
  const morphTl = gsap.timeline({ repeat: -1, yoyo: true });

  // Blob 1 morph
  morphTl.to(path1, {
    attr: { d: shapes.blob1[1] },
    duration: 4, ease: "sine.inOut",
  }, 0);
  morphTl.to(path1, {
    attr: { d: shapes.blob1[2] },
    duration: 4, ease: "sine.inOut",
  }, 4);
  morphTl.to(path1, {
    attr: { d: shapes.blob1[3] },
    duration: 4, ease: "sine.inOut",
  }, 8);
  morphTl.to(path1, {
    attr: { d: shapes.blob1[0] },
    duration: 4, ease: "sine.inOut",
  }, 12);

  // Blob 2 morph (offset)
  morphTl.to(path2, {
    attr: { d: shapes.blob2[1] },
    duration: 5, ease: "sine.inOut",
  }, 1);
  morphTl.to(path2, {
    attr: { d: shapes.blob2[2] },
    duration: 5, ease: "sine.inOut",
  }, 6);
  morphTl.to(path2, {
    attr: { d: shapes.blob2[3] },
    duration: 5, ease: "sine.inOut",
  }, 11);
  morphTl.to(path2, {
    attr: { d: shapes.blob2[0] },
    duration: 5, ease: "sine.inOut",
  }, 16);

  // Blob 3 morph (more offset)
  morphTl.to(path3, {
    attr: { d: shapes.blob3[1] },
    duration: 6, ease: "sine.inOut",
  }, 2);
  morphTl.to(path3, {
    attr: { d: shapes.blob3[2] },
    duration: 6, ease: "sine.inOut",
  }, 8);
  morphTl.to(path3, {
    attr: { d: shapes.blob3[3] },
    duration: 6, ease: "sine.inOut",
  }, 14);
  morphTl.to(path3, {
    attr: { d: shapes.blob3[0] },
    duration: 6, ease: "sine.inOut",
  }, 20);

  // Scroll-driven scale + opacity
  gsap.fromTo(blob, {
    scale: 0.3,
    opacity: 0,
  }, {
    scale: 1,
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: blob,
      start: "top 90%",
      end: "center center",
      scrub: 1,
    }
  });

  // Scroll-driven rotation
  gsap.to(blob, {
    rotation: 15,
    scrollTrigger: {
      trigger: blob,
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    }
  });
}

// ============================================
// PRODUCT GRID
// ============================================
function initProductGrid() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  renderProductGrid(productData, grid);
}

function renderProductGrid(data, grid) {
  grid.innerHTML = "";
  data.forEach(item => {
    const el = document.createElement("div");
    el.className = "product-card" + (item.layout === "tall" ? " tall" : "") + (item.layout === "wide" ? " wide" : "") + (item.layout === "featured" ? " featured" : "");
    el.dataset.brand = item.category;
    el.innerHTML = `
      <div class="product-card-img">
        <img class="img-main" src="${item.img}" alt="${item.name}" loading="lazy">
        ${item.hover ? `<img class="img-hover" src="${item.hover}" alt="${item.name} alt" loading="lazy">` : ""}
      </div>
      ${item.tag ? `<div class="product-card-tag">${item.tag}</div>` : ""}
      <div class="product-card-info">
        <div class="product-card-brand">${item.brand}</div>
        <div class="product-card-name">${item.name}</div>
        <div class="product-card-price">${item.price}</div>
      </div>
    `;
    grid.appendChild(el);
  });
}

function initSearchFilter() {
  const input = document.getElementById("searchInput");
  const grid = document.getElementById("productGrid");
  const btns = document.querySelectorAll(".filter-btn");
  let active = "all";

  if (input) {
    input.addEventListener("input", () => {
      const q = input.value.toLowerCase();
      const filtered = productData.filter(item => {
        const matchSearch = item.name.toLowerCase().includes(q) || item.brand.toLowerCase().includes(q);
        const matchFilter = active === "all" || item.category === active;
        return matchSearch && matchFilter;
      });
      renderProductGrid(filtered, grid);
    });
  }

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      active = btn.dataset.filter;
      const q = input ? input.value.toLowerCase() : "";
      const filtered = productData.filter(item => {
        const matchSearch = !q || item.name.toLowerCase().includes(q) || item.brand.toLowerCase().includes(q);
        const matchFilter = active === "all" || item.category === active;
        return matchSearch && matchFilter;
      });
      renderProductGrid(filtered, grid);
    });
  });
}

// ============================================
// NAV + INQUIRY
// ============================================
function openMobileMenu() { document.getElementById("mobileMenu").classList.add("open"); }
function closeMobileMenu() { document.getElementById("mobileMenu").classList.remove("open"); }
function handleInquiry(e) {
  e.preventDefault();
  const btn = e.target.querySelector(".inquiry-btn");
  btn.textContent = "SENT!";
  setTimeout(() => { btn.textContent = "Send"; e.target.reset(); }, 2000);
}

// ============================================
// HERO 3D MODEL (scroll-driven rotation)
// ============================================
function initHero3D() {
  const canvas = document.getElementById("hero3D");
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 0.5, 4);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
  dirLight.position.set(3, 4, 2);
  scene.add(dirLight);

  const rimLight = new THREE.PointLight(0xffffff, 0.8, 10);
  rimLight.position.set(-2, 1, 3);
  scene.add(rimLight);

  const bottomLight = new THREE.PointLight(0xffffff, 0.4, 10);
  bottomLight.position.set(0, -2, 2);
  scene.add(bottomLight);

  // Load GLB model
  let model = null;
  let modelLoaded = false;
  const loader = new THREE.GLTFLoader();

  console.log("[3D] Loading campus.glb...");
  loader.load(
    "campus.glb",
    (gltf) => {
      console.log("[3D] GLB loaded successfully");
      model = gltf.scene;
      modelLoaded = true;

      // Auto-center and scale
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2.5 / maxDim;
      model.scale.setScalar(scale);
      model.position.sub(center.multiplyScalar(scale));
      model.position.y -= 0.2;

      console.log("[3D] Model scaled:", scale, "size:", size.x.toFixed(1), size.y.toFixed(1), size.z.toFixed(1));

      scene.add(model);
    },
    (progress) => {
      console.log("[3D] Loading:", Math.round((progress.loaded / progress.total) * 100) + "%");
    },
    (err) => {
      console.error("[3D] GLB load FAILED:", err);
      // Fallback: wireframe shoe shape
      const geo = new THREE.BoxGeometry(1.5, 0.6, 3);
      const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, opacity: 0.2, transparent: true });
      model = new THREE.Mesh(geo, mat);
      modelLoaded = true;
      scene.add(model);
    }
  );

  // Scroll-driven rotation
  let scrollProgress = 0;
  window.addEventListener("scroll", () => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height));
  });

  // Animate
  function animate() {
    requestAnimationFrame(animate);

    if (model && modelLoaded) {
      // Scroll-driven rotation + subtle idle spin
      model.rotation.y = scrollProgress * Math.PI * 2 + Date.now() * 0.0002;
      model.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.25;
      model.position.y = -0.2 + Math.sin(scrollProgress * Math.PI * 2) * 0.15;
    }

    renderer.render(scene, camera);
  }
  animate();

  // Resize
  window.addEventListener("resize", () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });
}
function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, particles = [];

  function resize() { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5, a: Math.random() * 0.3 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.a})`;
      ctx.fill();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 120)})`;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ============================================
// INIT
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflow = "hidden";
  splitTextElements();
  initLenis();
  initHero3D();
  initHeroCanvas();
  initCursor();
  initPreloader();
  initMarquee();
  initSwiperCarousel();
  initGallery();
  initProductGrid();
  initSearchFilter();
  initScatteredObjects();
  initVideoOnScroll();
  initBlobMorph();
  initAdaptiveNav();
  initParallax();

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute("href"));
      if (target) lenis.scrollTo(target, { offset: 0 });
    });
  });
});
