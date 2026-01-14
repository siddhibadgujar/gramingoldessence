import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import products from "../data/product";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Product() {
  return (
    <section id="products" className="py-16 bg-gray-50 overflow-x-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Our Products
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg p-2"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}