import { marqueeItems } from "../data/products";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-section section-light">
      <div className="marquee-track" id="marqueeTrack">
        {items.map((d, i) => (
          <span className="marquee-item" key={i}>
            {d.brand} {d.name} <span className="pct">{d.disc}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
