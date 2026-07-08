export default function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">SHOESTRIDE</div>
          <p>Premium sneakers for the bold generation.</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Shop</h4>
            <a href="#collections">New Arrivals</a>
            <a href="#collections">Best Sellers</a>
            <a href="#collections">Sale</a>
          </div>
          <div className="footer-col">
            <h4>Info</h4>
            <a href="#inquiry">Contact</a>
            <a href="#inquiry">About Us</a>
            <a href="#inquiry">FAQs</a>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 ShoeStride. All rights reserved.</span>
        <div className="footer-social">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
