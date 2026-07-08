import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default function BlobTransition() {
  const blobRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    const p1 = path1Ref.current;
    const p2 = path2Ref.current;
    const p3 = path3Ref.current;
    if (!blob || !p1 || !p2 || !p3) return;

    const ctx = gsap.context(() => {
      const morphTl = gsap.timeline({ repeat: -1, yoyo: true });

      // Blob 1 morph
      morphTl.to(p1, { attr: { d: shapes.blob1[1] }, duration: 4, ease: "sine.inOut" }, 0);
      morphTl.to(p1, { attr: { d: shapes.blob1[2] }, duration: 4, ease: "sine.inOut" }, 4);
      morphTl.to(p1, { attr: { d: shapes.blob1[3] }, duration: 4, ease: "sine.inOut" }, 8);
      morphTl.to(p1, { attr: { d: shapes.blob1[0] }, duration: 4, ease: "sine.inOut" }, 12);

      // Blob 2 morph
      morphTl.to(p2, { attr: { d: shapes.blob2[1] }, duration: 5, ease: "sine.inOut" }, 1);
      morphTl.to(p2, { attr: { d: shapes.blob2[2] }, duration: 5, ease: "sine.inOut" }, 6);
      morphTl.to(p2, { attr: { d: shapes.blob2[3] }, duration: 5, ease: "sine.inOut" }, 11);
      morphTl.to(p2, { attr: { d: shapes.blob2[0] }, duration: 5, ease: "sine.inOut" }, 16);

      // Blob 3 morph
      morphTl.to(p3, { attr: { d: shapes.blob3[1] }, duration: 6, ease: "sine.inOut" }, 2);
      morphTl.to(p3, { attr: { d: shapes.blob3[2] }, duration: 6, ease: "sine.inOut" }, 8);
      morphTl.to(p3, { attr: { d: shapes.blob3[3] }, duration: 6, ease: "sine.inOut" }, 14);
      morphTl.to(p3, { attr: { d: shapes.blob3[0] }, duration: 6, ease: "sine.inOut" }, 20);

      // Scroll-driven scale + opacity
      gsap.fromTo(
        blob,
        { scale: 0.3, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: blob, start: "top 90%", end: "center center", scrub: 1 },
        }
      );

      // Scroll-driven rotation
      gsap.to(blob, {
        rotation: 15,
        scrollTrigger: { trigger: blob, start: "top bottom", end: "bottom top", scrub: 2 },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="blob-transition" id="blobTransition" ref={blobRef}>
      <svg className="blob-svg" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="blobGoo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
          </filter>
          <filter id="chromatic">
            <feOffset in="SourceGraphic" dx="2" dy="0" result="r" />
            <feOffset in="SourceGraphic" dx="-2" dy="0" result="b" />
            <feColorMatrix in="r" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="red" />
            <feColorMatrix in="b" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="blue" />
            <feBlend in="red" in2="blue" mode="screen" />
          </filter>
          <linearGradient id="blobGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b2b">
              <animate attributeName="stop-color" values="#ff6b2b;#ff0055;#8b00ff;#00ccff;#ff6b2b" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#ff0055">
              <animate attributeName="stop-color" values="#ff0055;#8b00ff;#00ccff;#ff6b2b;#ff0055" dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <linearGradient id="blobGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b00ff">
              <animate attributeName="stop-color" values="#8b00ff;#00ccff;#ff6b2b;#ff0055;#8b00ff" dur="10s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#00ccff">
              <animate attributeName="stop-color" values="#00ccff;#ff6b2b;#ff0055;#8b00ff;#00ccff" dur="10s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <linearGradient id="blobGrad3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ff0055">
              <animate attributeName="stop-color" values="#ff0055;#8b00ff;#00ccff;#ff6b2b;#ff0055" dur="12s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#ff6b2b">
              <animate attributeName="stop-color" values="#ff6b2b;#ff0055;#8b00ff;#00ccff;#ff6b2b" dur="12s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <g filter="url(#blobGoo)">
          <g filter="url(#chromatic)">
            <path ref={path1Ref} d={shapes.blob1[0]} fill="url(#blobGrad1)" opacity="0.7" />
            <path ref={path2Ref} d={shapes.blob2[0]} fill="url(#blobGrad2)" opacity="0.5" />
            <path ref={path3Ref} d={shapes.blob3[0]} fill="url(#blobGrad3)" opacity="0.6" />
          </g>
        </g>
      </svg>
    </div>
  );
}
