import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { galleryImages } from "../data/products";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const allItems = [...galleryImages, ...galleryImages];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 3D scroll cascade
      const cards = section.querySelectorAll(".gallery-card");
      cards.forEach((card, i) => {
        card.classList.add("scroll-3d");
        (card as HTMLElement).style.transitionDelay = `${(i % 4) * 0.08}s`;
      });

      ScrollTrigger.create({
        trigger: section,
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
        },
      });

      // Parallax depth
      gsap.to(section, {
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1 },
        rotateX: 3,
        rotateY: -2,
        transformPerspective: 1200,
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => swiperRef.current?.autoplay.stop();
  const handleMouseLeave = () => swiperRef.current?.autoplay.start();

  return (
    <section className="gallery-section section-dark" ref={sectionRef}>
      <div className="content-section gallery-header">
        <span className="section-label">Visual Stories</span>
        <h2 className="section-heading chromatic-text split-text" data-text="THE GALLERY">
          THE GALLERY
        </h2>
      </div>
      <div className="gallery-conveyor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          className="gallery-swiper"
          modules={[FreeMode, Autoplay]}
          slidesPerView={2.5}
          spaceBetween={20}
          centeredSlides
          loop
          speed={800}
          grabCursor
          autoplay={{ delay: 0, disableOnInteraction: false }}
          freeMode={{ enabled: true, momentum: false }}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 12 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 24 },
            1440: { slidesPerView: 4.5, spaceBetween: 28 },
          }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {allItems.map((item, i) => (
            <SwiperSlide key={i} className="gallery-slide">
              <div className="gallery-card">
                <img src={item.img} alt={item.name} loading="lazy" />
                <div className="gallery-card-acrylic">
                  <div className="gallery-card-brand">{item.brand}</div>
                  <div className="gallery-card-name">{item.name}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
