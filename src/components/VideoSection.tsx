import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrap,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => video.play(),
        onLeave: () => video.pause(),
        onEnterBack: () => video.play(),
        onLeaveBack: () => video.pause(),
      });

      gsap.to(video, {
        scale: 1.1,
        scrollTrigger: {
          trigger: wrap,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="video-scroll-section section-dark" id="videoScrollWrap" ref={wrapRef}>
      <video
        ref={videoRef}
        src="/images/puma-speedcat.mp4"
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="video-scroll-overlay">
        <div className="video-scroll-text">
          <span className="section-label">The Culture</span>
          <h2 className="video-text chromatic-text split-text" data-text="THE CULTURE OF STRIDE">
            THE CULTURE<br />OF STRIDE
          </h2>
        </div>
      </div>
    </section>
  );
}
