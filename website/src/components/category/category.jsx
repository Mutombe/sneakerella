// components/home/CategoriesGrid.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../../data';

const CategoriesGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect sneakers for every occasion and activity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              to={`/products/${category.name.toLowerCase()}`}
              key={category.id}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover object-center w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-gray-300 text-sm">{category.count} Products</p>
                </div>
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;