import { useState, useEffect, useCallback } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import VideoSection from "./components/VideoSection";
import BlobTransition from "./components/BlobTransition";
import Carousel from "./components/Carousel";
import Gallery from "./components/Gallery";
import ProductGrid from "./components/ProductGrid";
import Inquiry from "./components/Inquiry";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import MobileMenu from "./components/MobileMenu";
import SectionTransition from "./components/SectionTransition";
import CustomCursor from "./components/CustomCursor";
import ScatteredObjects from "./components/ScatteredObjects";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Lenis smooth scroll
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Anchor link handling
    const handleClick = (e: Event) => {
      const target = (e.target as HTMLElement).closest("a[href^='#']");
      if (target) {
        e.preventDefault();
        const href = target.getAttribute("href");
        if (href) {
          const el = document.querySelector(href);
          if (el) lenis.scrollTo(el as HTMLElement, { offset: 0 });
        }
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleClick);
    };
  }, [isLoading]);

  // Split text elements for animation
  useEffect(() => {
    if (isLoading) return;

    document
      .querySelectorAll(".split-text, .section-heading, .collections-title, .inquiry-title, .video-text")
      .forEach((el) => {
        const html = el.innerHTML;
        const lines = html.split(/<br\s*\/?>/i);
        el.innerHTML = lines
          .map((line) => {
            const words = line.trim().split(/\s+/);
            return (
              '<span class="split-line" style="overflow:hidden;display:block">' +
              words.map((w) => `<span class="split-word" style="display:inline-block;transform:translateY(110%)">${w}</span>`).join(" ") +
              "</span>"
            );
          })
          .join("");
      });

    document.querySelectorAll(".hero-title .split-line").forEach((line) => {
      const text = line.textContent;
      line.innerHTML = `<span class="split-word" style="display:inline-block;transform:translateY(110%)">${text}</span>`;
    });
  }, [isLoading]);

  // GSAP animations
  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      // Hero entrance
      const heroTl = gsap.timeline({ delay: 0.3 });
      heroTl
        .to(".hero-tag", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0)
        .to(".hero-title .split-word", { y: 0, duration: 1.2, stagger: 0.12, ease: "power3.out" }, 0.2)
        .to(".hero-sub", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.8)
        .to(".hero-cta-wrap", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 1);

      // Split text reveals
      gsap.utils
        .toArray<HTMLElement>(
          ".split-text .split-word, .section-heading .split-word, .collections-title .split-word, .inquiry-title .split-word, .video-text .split-word"
        )
        .forEach((word) => {
          gsap.to(word, {
            scrollTrigger: { trigger: (word.closest(".split-line") as HTMLElement) || word, start: "top 90%" },
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        });

      // Section labels
      gsap.utils.toArray<HTMLElement>(".section-label").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 90%" },
          opacity: 0,
          x: -20,
          duration: 0.6,
          ease: "power2.out",
        });
      });

      // Product grid items
      gsap.utils.toArray<HTMLElement>(".product-card").forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 92%" },
          opacity: 0,
          y: 30,
          scale: 0.97,
          duration: 0.5,
          delay: (i % 4) * 0.06,
          ease: "power2.out",
        });
      });

      // Carousel cards
      gsap.utils.toArray<HTMLElement>(".carousel-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 95%" },
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: i * 0.04,
          ease: "power2.out",
        });
      });

      // Hero parallax
      gsap.to(".hero-content", {
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
        y: -80,
        opacity: 0.3,
      });

      // Parallax sections
      gsap.to(".video-scroll-section video", {
        scrollTrigger: { trigger: ".video-scroll-section", start: "top bottom", end: "bottom top", scrub: 1 },
        y: -60,
      });

      gsap.to(".blob-transition", {
        scrollTrigger: { trigger: ".blob-transition", start: "top bottom", end: "bottom top", scrub: 1 },
        y: -40,
      });

      gsap.from(".carousel-section .section-label", {
        scrollTrigger: { trigger: ".carousel-section", start: "top 80%" },
        y: 30,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".gallery-header", {
        scrollTrigger: { trigger: ".gallery-section", start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".product-grid-section .collections-header", {
        scrollTrigger: { trigger: ".product-grid-section", start: "top 80%" },
        y: 30,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".inquiry-inner", {
        scrollTrigger: { trigger: ".inquiry", start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      gsap.utils.toArray<HTMLElement>("section").forEach((sec) => {
        gsap.from(sec, {
          scrollTrigger: { trigger: sec, start: "top 95%", end: "top 60%", scrub: 0.5 },
          opacity: 0.7,
        });
      });
    });

    return () => ctx.revert();
  }, [isLoading]);

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <>
      <div className="noise" />
      <CustomCursor />
      <ScatteredObjects />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Header onMenuOpen={() => setMenuOpen(true)} />

      <Hero />
      <SectionTransition />
      <Marquee />
      <SectionTransition inverted />
      <VideoSection />
      <BlobTransition />
      <Carousel />
      <Gallery />
      <SectionTransition />
      <ProductGrid />
      <SectionTransition inverted />
      <Inquiry />
      <Footer />
    </>
  );
}
