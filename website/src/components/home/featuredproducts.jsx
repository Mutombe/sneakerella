// components/home/FeaturedProducts.jsx
import { motion } from "framer-motion";
import { useRef } from "react";
import { useCart } from "../../cartContext";

const FeaturedProducts = () => {
  const containerRef = useRef(null);
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addToCart(product, selectedSize);
  };

  const products = [
    {
      id: 2,
      name: "Converse Star Pro",
      price: 199.99,
      image: "/converse.webp",
      category: "Running",
    },

    {
      id: 4,
      name: "Air Force One",
      price: 199.99,
      image: "/airforce.png",
      category: "Running",
    },
    {
      id: 3,
      name: "Air Force Pixel",
      price: 199.99,
      image: "/airforce2.webp",
      category: "Running",
    },
    {
      id: 1,
      name: "Air Max Supreme",
      price: 199.99,
      image: "/airmax.jpg",
      category: "Running",
    },

    // Add more products...
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium sneakers that combine
            style, comfort, and innovation.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="object-cover object-center w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="mt-1 text-lg font-semibold text-purple-600">
                  ${product.price}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
