import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in ${product.name}. Quantity: ${quantity} Kg`
  );

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white rounded-xl shadow-md p-6 border-transparent hover:shadow-xl transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain rounded-lg mb-4"
      />

      {/* Product Name */}
      <h3 className="text-xl font-semibold text-green-700 mb-4">{product.name}</h3>

      <div className="flex gap-3 mt-2">
        {/* Enquiry Button */}
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          onClick={() =>
            window.open(
              `https://wa.me/919168065856?text=${whatsappMessage}`,
              "_blank"
            )
          }
        >
          Enquiry Now
        </button>

        {/* View More Button */}
        <button
          className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          View More
        </button>
      </div>
    </motion.div>
  );
}