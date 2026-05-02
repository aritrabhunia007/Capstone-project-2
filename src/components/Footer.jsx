import { Link } from 'react-router-dom';
import { Leaf, Camera, MessageCircle, Globe } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand-section">
          <Link to="/" className="nav-brand footer-brand">
            <Leaf className="brand-icon" size={32} />
            <span>EcoWear</span>
          </Link>
          <p className="footer-description">
            A premium sustainable fashion marketplace. Buy and sell pre-owned, high-quality clothing while reducing your carbon footprint.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><Camera /></a>
            <a href="#" aria-label="Twitter"><MessageCircle /></a>
            <a href="#" aria-label="Facebook"><Globe /></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/marketplace">All Items</Link></li>
              <li><Link to="/marketplace?category=womens">Women's</Link></li>
              <li><Link to="/marketplace?category=mens">Men's</Link></li>
              <li><Link to="/marketplace?category=accessories">Accessories</Link></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>About</h4>
            <ul>
              <li><Link to="/about">Our Mission</Link></li>
              <li><Link to="/about">Sustainability Impact</Link></li>
              <li><Link to="/about">Careers</Link></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Help</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping">Shipping & Returns</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} EcoWear. All rights reserved. Capstone Project.</p>
        </div>
      </div>
    </footer>
  );
}
