// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/nav/nav';
import HeroSection from './components/home/hero';
import CategoriesGrid from './components/category/category';
import FeaturedProducts from './components/home/featuredproducts';
import Products from './components/category/products';
import NewArrivals from './components/arrivals/arrivals';
import ProductDetail from './components/category/productdetails';
import Footer from './components/footer/footer';
import { CartProvider } from './cartContext';
import Cart from './components/cart/cart';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Placeholder components for other routes
const Shop = () =><><CategoriesGrid /> <Products /></> ;
const Collections = () => <div className="pt-16">Collections Page</div>;

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Navbar />
          <Toaster position="top-center" richColors />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/collections" element={<Collections />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;