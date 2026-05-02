import { Link } from 'react-router-dom';
import { ShoppingBag, Leaf, Search, Menu } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar glass-panel">
      <div className="container nav-content">
        <Link to="/" className="nav-brand">
          <Leaf className="brand-icon" size={28} />
          <span>EcoWear</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/marketplace" className="nav-link">Marketplace</Link>
          <Link to="/about" className="nav-link">Sustainability</Link>
        </div>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={22} />
          </button>
          <button className="icon-btn cart-btn" aria-label="Cart">
            <ShoppingBag size={22} />
            <span className="cart-badge">2</span>
          </button>
          <button className="icon-btn mobile-menu" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
