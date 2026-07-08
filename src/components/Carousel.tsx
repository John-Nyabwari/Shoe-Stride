import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { carouselItems } from "../data/products";

export default function Carousel() {
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hint = hintRef.current;
    if (!hint) return;
    const hide = () => hint.classList.add("hidden");
    document.addEventListener("mousedown", hide, { once: true });
    document.addEventListener("touchstart", hide, { once: true });
    return () => {
      document.removeEventListener("mousedown", hide);
      document.removeEventListener("touchstart", hide);
    };
  }, []);

  return (
    <section className="carousel-section section-dark">
      <div className="content-section">
        <span className="section-label">Trending Now</span>
        <h2 className="section-heading chromatic-text split-text" data-text="WORN BY THE CULTURE">
          WORN BY<br />THE CULTURE
        </h2>
      </div>
      <div className="drag-hint" id="dragHint" ref={hintRef}>
        <span>&larr; Drag to explore &rarr;</span>
      </div>
      <Swiper
        className="carousel-swiper"
        modules={[FreeMode]}
        slidesPerView="auto"
        spaceBetween={16}
        freeMode={{ enabled: true, momentum: true, momentumRatio: 0.5 }}
        grabCursor
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 12 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
          1440: { slidesPerView: 5, spaceBetween: 16 },
        }}
      >
        {carouselItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="carousel-card">
              <div className="carousel-card-img">
                <img src={item.img} alt={item.name} loading="lazy" />
              </div>
              <div className="carousel-card-body">
                <div className="carousel-card-divider" />
                <div className="carousel-card-brand">{item.brand}</div>
                <div className="carousel-card-name">{item.name}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
