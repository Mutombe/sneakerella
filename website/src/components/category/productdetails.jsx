// pages/ProductDetail.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown, Truck, Shield } from "lucide-react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data";
import { useCart } from "../../cartContext";
const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = getProductById(parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addToCart(product, selectedSize);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div
              className="aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden bg-gray-100"
              layoutId={`product-image-${selectedImage}`}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="object-cover object-center w-full h-full"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 ${
                    selectedImage === index ? "ring-2 ring-purple-600" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="object-center w-full h-full"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">{product.reviews} reviews</span>
              </div>
            </div>

            <div className="text-3xl font-bold text-purple-600">
              ${product.price}
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Select Size</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size.us}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-3 px-4 rounded-lg border-2 ${
                      selectedSize === size.us
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-600"
                    }`}
                    onClick={() => setSelectedSize(size.us)}
                  >
                    <div className="text-sm font-medium">US {size.us}</div>
                    <div className="text-xs text-gray-500">
                      UK {size.uk} / EU {size.eu}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Colors</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <div key={color} className="text-sm text-gray-600">
                    {color}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Features</h3>
              <ul className="list-disc list-inside space-y-1">
                {product.features.map((feature) => (
                  <li key={feature} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Add to Cart
            </motion.button>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">
                  Free shipping on orders over $100
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">
                  1 year warranty included
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
