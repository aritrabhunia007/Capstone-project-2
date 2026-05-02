import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ id, name, brand, price, originalPrice, image, condition }) {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-image-container">
        <img src={image} alt={name} className="product-image" loading="lazy" />
        <div className="product-badges">
          <span className="badge badge-condition">{condition}</span>
          {discount > 0 && <span className="badge badge-discount">-{discount}%</span>}
        </div>
        <div className="product-overlay">
          <button className="btn btn-primary btn-quick-add">View Details</button>
        </div>
      </Link>
      
      <div className="product-info">
        <p className="product-brand">{brand}</p>
        <Link to={`/product/${id}`}>
          <h3 className="product-name">{name}</h3>
        </Link>
        <div className="product-price-row">
          <span className="product-price">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="product-original-price">Est. Retail: ${originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
