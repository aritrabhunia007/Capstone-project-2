import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import ProductDetail from './pages/ProductDetail';

// Dummy About component for completeness
function About() {
  return (
    <div className="container" style={{ padding: '6rem 0', minHeight: '60vh' }}>
      <h1>Sustainability Mission</h1>
      <p style={{ marginTop: '2rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
        Our mission is to reduce fashion waste by providing a premium marketplace for pre-owned clothing.
        Every item purchased here saves water, reduces carbon emissions, and gives beautiful garments a second life.
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
