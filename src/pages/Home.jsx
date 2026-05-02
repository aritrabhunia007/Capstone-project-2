import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, TrendingUp, ShieldCheck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data';
import './Home.css';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-text animate-fade-in">
            <h1>Sustainable Fashion for a Better Tomorrow</h1>
            <p>
              Discover high-quality pre-owned clothing. Shop sustainably, save money, and reduce your carbon footprint without compromising on style.
            </p>
            <div className="hero-actions">
              <Link to="/marketplace" className="btn btn-primary">
                Shop Collection <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-outline">
                How It Works
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1489987707023-afc6a1ceadd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Sustainable apparel collection" 
              className="hero-image" 
            />
            <div className="hero-floating-badge glass-panel">
              <Recycle size={20} className="brand-icon" />
              <span>Over 10,000 items saved from landfill this year</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Features */}
      <section className="features-section">
        <div className="container features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Recycle size={28} /></div>
            <h3>Eco-Friendly</h3>
            <p>Every purchase reduces waste and extends the lifecycle of beautiful garments.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><ShieldCheck size={28} /></div>
            <h3>Quality Verified</h3>
            <p>Our team expertly authenticates and checks every single item for quality.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><TrendingUp size={28} /></div>
            <h3>Fair Prices</h3>
            <p>Access premium brands at a fraction of their original retail price.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Recent Arrivals</h2>
            <Link to="/marketplace" className="view-all-link">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
