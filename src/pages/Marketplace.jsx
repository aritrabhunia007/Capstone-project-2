import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data';
import './Marketplace.css';

export default function Marketplace() {
  const [products, setProducts] = useState(PRODUCTS);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    
    if (category) {
      setProducts(PRODUCTS.filter(p => p.category === category));
    } else {
      setProducts(PRODUCTS);
    }
    
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="marketplace-page">
      <div className="marketplace-header container">
        <h1>Marketplace</h1>
        <p>Discover unique, sustainable pre-owned items.</p>
      </div>

      <div className="container marketplace-layout">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="filter-header">
            <h3><Filter size={18} /> Filters</h3>
          </div>
          
          <div className="filter-group">
            <h4>Category <ChevronDown size={16} /></h4>
            <ul>
              <li><label><input type="checkbox" /> Women's</label></li>
              <li><label><input type="checkbox" /> Men's</label></li>
              <li><label><input type="checkbox" /> Accessories</label></li>
            </ul>
          </div>
          
          <div className="filter-group">
            <h4>Condition <ChevronDown size={16} /></h4>
            <ul>
              <li><label><input type="checkbox" /> New with Tags</label></li>
              <li><label><input type="checkbox" /> Like New</label></li>
              <li><label><input type="checkbox" /> Good Condition</label></li>
              <li><label><input type="checkbox" /> Gently Used</label></li>
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="marketplace-content">
          <div className="content-toolbar">
            <span className="results-count">Showing {products.length} results</span>
            <select className="sort-dropdown" aria-label="Sort products">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>

          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
