import { useState, useMemo } from "react";
import { productData, type Product } from "../data/products";

const filters = [
  { label: "All", value: "all" },
  { label: "Nike", value: "nike" },
  { label: "Adidas", value: "adidas" },
  { label: "Puma", value: "puma" },
  { label: "Running", value: "running" },
];

export default function ProductGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return productData.filter((item) => {
      const matchSearch = !q || item.name.toLowerCase().includes(q) || item.brand.toLowerCase().includes(q);
      const matchFilter = activeFilter === "all" || item.category === activeFilter;
      return matchSearch && matchFilter;
    });
  }, [searchTerm, activeFilter]);

  return (
    <section className="product-grid-section section-light" id="collections">
      <div className="content-section collections-header">
        <span className="section-label">Our Picks</span>
        <h2 className="section-heading collections-title chromatic-text split-text" data-text="THE COLLECTION">
          THE COLLECTION
        </h2>
      </div>
      <div className="search-bar">
        <input
          className="search-input"
          id="searchInput"
          type="text"
          placeholder="Search sneakers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="filter-bar">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter-btn${activeFilter === f.value ? " active" : ""}`}
            data-filter={f.value}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="product-grid" id="productGrid">
        {filtered.map((item, i) => (
          <ProductCard key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ item }: { item: Product }) {
  const className = [
    "product-card",
    item.layout === "tall" ? "tall" : "",
    item.layout === "wide" ? "wide" : "",
    item.layout === "featured" ? "featured" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} data-brand={item.category}>
      <div className="product-card-img">
        <img className="img-main" src={item.img} alt={item.name} loading="lazy" />
        {item.hover && <img className="img-hover" src={item.hover} alt={`${item.name} alt`} loading="lazy" />}
      </div>
      {item.tag && <div className="product-card-tag">{item.tag}</div>}
      <div className="product-card-info">
        <div className="product-card-brand">{item.brand}</div>
        <div className="product-card-name">{item.name}</div>
        <div className="product-card-price">{item.price}</div>
      </div>
    </div>
  );
}
