import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scatteredObjects } from "../data/products";

gsap.registerPlugin(ScrollTrigger);

export default function ScatteredObjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const objs = container.querySelectorAll<HTMLElement>(".scattered-obj");

      objs.forEach((el, i) => {
        const obj = scatteredObjects[i];

        // Parallax on scroll
        gsap.to(el, {
          y: () => -200 * obj.speed,
          rotation: obj.rotate + (Math.random() > 0.5 ? 10 : -10),
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Mouse follow
        const handleMouse = (e: MouseEvent) => {
          const mx = (e.clientX / window.innerWidth - 0.5) * 20 * obj.speed;
          const my = (e.clientY / window.innerHeight - 0.5) * 20 * obj.speed;
          gsap.to(el, { x: mx, y: my, duration: 1.5, ease: "power2.out" });
        };
        document.addEventListener("mousemove", handleMouse);
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="scattered-objects" id="scatteredObjects" ref={containerRef}>
      {scatteredObjects.map((obj, i) => (
        <div
          key={i}
          className="scattered-obj"
          style={{
            left: `${obj.x}%`,
            top: `${obj.y}%`,
            width: `${obj.size}px`,
            height: `${obj.size}px`,
            transform: `rotate(${obj.rotate}deg)`,
          }}
        >
          <img src={obj.img} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
}
