interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div className={`mobile-menu${isOpen ? " open" : ""}`} id="mobileMenu">
      <button className="mobile-menu-close" onClick={onClose}>&times;</button>
      <nav className="mobile-menu-nav">
        <a href="#hero" onClick={onClose}>Home</a>
        <a href="#collections" onClick={onClose}>Collections</a>
        <a href="#inquiry" onClick={onClose}>Inquiry</a>
      </nav>
    </div>
  );
}
