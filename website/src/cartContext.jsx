// context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, selectedSize) => {
    const item = {
      ...product,
      selectedSize,
      quantity: 1,
    };
    
    setCart(prev => [...prev, item]);
    toast.success(`Added ${product.name} to cart`);
  };

  const removeFromCart = (productId, selectedSize) => {
    setCart(prev => prev.filter(item => 
      !(item.id === productId && item.selectedSize === selectedSize)
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);