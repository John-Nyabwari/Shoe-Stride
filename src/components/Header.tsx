import { useEffect, useRef } from "react";

interface HeaderProps {
  onMenuOpen: () => void;
}

export default function Header({ onMenuOpen }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    header.classList.add("on-dark");

    const sections = document.querySelectorAll(".section-dark, .section-light");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));

    const handleScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToCollections = () => {
    document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header" ref={headerRef}>
      <a href="#hero" className="header-logo">SHOESTRIDE</a>
      <nav className="header-nav">
        <a href="#hero">Home</a>
        <a href="#collections">Collections</a>
        <a href="#inquiry">Inquiry</a>
      </nav>
      <div className="header-icons">
        <button className="header-icon" onClick={scrollToCollections} aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
        <button className="header-icon" aria-label="Wishlist">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <button className="header-icon" aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </button>
        <button className="header-icon nav-menu-btn" onClick={onMenuOpen} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
