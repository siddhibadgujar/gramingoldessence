import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/product";

export default function ProductDetail() {
  const { id } = useParams();
  const prod = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!prod)
    return <p className="text-center mt-20 text-gray-700">Product not found</p>;

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in ${prod.name}. Quantity: ${quantity} Kg`
  );

  return (
    <motion.section
      className="py-16 px-4 bg-gray-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top: Image + Info */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Product Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <motion.img
              src={prod.image}
              alt={prod.name}
              className="w-full h-96 md:h-[28rem] object-contain rounded-xl shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-700">
              {prod.name}
            </h2>

            {/* Price & Quantity */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-xl font-semibold">Price: ₹{prod.pricePerKg} / Kg</p>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none p-2 w-20 rounded"
                />
                <span>Kg</span>
              </div>
            </div>

            {/* Packaging */}
            <p className="text-gray-700">
              <strong>Packaging:</strong> {prod.packaging}
            </p>

            {/* Description */}
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {prod.description.map((desc, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {desc}
                </motion.li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-3 mt-4">
              <motion.a
                href={`https://wa.me/919168065856?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg text-center hover:bg-green-700 transition"
                whileHover={{ scale: 1.05 }}
              >
                Enquiry Now
              </motion.a>

              <motion.a
                href="tel:+919168065856"
                className="border border-green-600 text-green-600 px-6 py-3 rounded-lg text-center hover:bg-green-100 transition"
                whileHover={{ scale: 1.05 }}
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Product Details: placed below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 bg-white p-6 rounded-xl shadow-md border border-transparent hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            Product Details
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            {Object.entries(prod.details).map(([key, value], idx) => (
              <motion.p
                key={key}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}