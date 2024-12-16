// components/NewArrivals.js
import React from 'react';
import { products } from '../../data';
import { StarIcon } from '@heroicons/react/solid';
import { useCart } from '../../cartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
          ${product.price}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{product.category}</span>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {product.stock} in stock
          </span>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


const NewArrivals = () => {
    const { addToCart } = useCart();
  // Get the latest 3 products (based on ID)
  const latestProducts = [...products]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <div className="container py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4"></h1>
        <p className="text-gray-600">
          Check out our latest collection of premium footwear
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestProducts.map((product) => (
          <div key={product.id} className="transform hover:scale-105 transition-transform duration-300">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Featured New Arrival */}
      <div className="mt-16 bg-gray-100 rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm">
              Just Launched
            </span>
            <h2 className="text-3xl font-bold">{latestProducts[0].name}</h2>
            <p className="text-gray-600">{latestProducts[0].description}</p>
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold">
                ${latestProducts[0].price}
              </span>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl">
            <img
              src='metcon2.jpeg'
              alt={latestProducts[0].name}
              className="object-cover object-center w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>


    </div>
  );
};

export default NewArrivals;

