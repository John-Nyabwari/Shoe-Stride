import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const dot = dotRef.current;
    const label = labelRef.current;
    if (!dot || !label) return;

    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0;
    let currentTheme = "dark";

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      label.style.left = mx + "px";
      label.style.top = my + 25 + "px";
    };

    const update = () => {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      dot.style.left = cx + "px";
      dot.style.top = cy + "px";
      requestAnimationFrame(update);
    };
    update();

    // Theme detection
    const handleThemeDetect = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const theme = el?.closest(".section-light") ? "light" : "dark";
      if (theme !== currentTheme) {
        currentTheme = theme;
        dot.classList.remove("on-dark", "on-light");
        dot.classList.add("on-" + theme);
        label.classList.remove("on-dark", "on-light");
        label.classList.add("on-" + theme);
      }
    };

    // Interaction states
    const interactions = [
      { selector: "a, button, .filter-btn, .gallery-btn, .hero-cta", cursor: "hovering", lbl: "" },
      { selector: ".product-card, .carousel-card", cursor: "hovering", lbl: "View" },
      { selector: ".gallery-card", cursor: "hovering", lbl: "Explore" },
      { selector: ".gallery-swiper", cursor: "drag-hover", lbl: "Drag" },
      { selector: ".scattered-obj", cursor: "hovering", lbl: "" },
      { selector: "h1, h2, h3, .split-text, .hero-title, .section-heading", cursor: "text-hover", lbl: "" },
    ];

    const cleanups: (() => void)[] = [];

    interactions.forEach(({ selector, cursor: cls, lbl }) => {
      document.querySelectorAll(selector).forEach((el) => {
        const enter = () => {
          dot.className = dot.className.replace(/hovering|text-hover|drag-hover/g, "").trim();
          dot.classList.add(cls);
          if (lbl) {
            label.textContent = lbl;
            label.classList.add("visible");
          }
        };
        const leave = () => {
          dot.classList.remove(cls);
          label.classList.remove("visible");
        };
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      });
    });

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousemove", handleThemeDetect);
    dot.classList.add("on-dark");
    label.classList.add("on-dark");

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousemove", handleThemeDetect);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <div className="cursor-dot on-dark" id="cursorDot" ref={dotRef} />
      <div className="cursor-label on-dark" id="cursorLabel" ref={labelRef} />
    </>
  );
}
