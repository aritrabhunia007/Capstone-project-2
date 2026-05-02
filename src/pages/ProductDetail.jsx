import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { PRODUCTS } from '../data';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === parseInt(id));
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/marketplace" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Marketplace</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="product-detail-page container">
      <div className="product-detail-layout">
        <div className="product-detail-image-col">
          <img src={product.image} alt={product.name} className="product-detail-main-img" />
        </div>
        
        <div className="product-detail-info-col">
          <div className="brand-breadcrumbs">
            <Link to={`/marketplace?category=${product.category}`}>
              {product.category.toUpperCase()}
            </Link> 
            {' / '} {product.brand}
          </div>
          
          <h1 className="product-detail-title">{product.name}</h1>
          
          <div className="price-section">
            <span className="current-price">${product.price.toFixed(2)}</span>
            <span className="retail-price">Est. Retail ${product.originalPrice.toFixed(2)}</span>
            {discount > 0 && <span className="discount-badge">Save {discount}%</span>}
          </div>

          <div className="condition-box">
            <div className="condition-header">
              <span className="condition-label">Condition:</span>
              <span className="condition-value">{product.condition}</span>
            </div>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="action-buttons">
            <button 
              className={`btn ${isAdded ? 'btn-success' : 'btn-primary'} btn-block`} 
              onClick={handleAddToCart}
            >
              <ShoppingBag size={20} />
              {isAdded ? 'Added to Cart!' : 'Add to Cart'}
            </button>
            <button className="btn btn-outline btn-icon-only" aria-label="Add to wishlist">
              <Heart size={20} />
            </button>
          </div>

          <div className="trust-badges">
            <div className="trust-badge">
              <ShieldCheck size={20} className="trust-icon" />
              <span>Authenticity Guaranteed</span>
            </div>
            <div className="trust-badge">
              <Truck size={20} className="trust-icon" />
              <span>Carbon-Neutral Shipping</span>
            </div>
            <div className="trust-badge">
              <RotateCcw size={20} className="trust-icon" />
              <span>14-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
