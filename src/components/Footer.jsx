import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white border-t border-gray-100 py-6 px-4"
    >
      <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm space-y-2">

        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-green-700">
            Gramin Gold Essence
          </span>
          . All Rights Reserved.
        </p>

        <p>
          Developed & Managed By{" "}
          <span className="font-medium text-gray-800 hover:text-green-700 transition">
            Siddhi Badgujar
          </span>
        </p>

      </div>
    </motion.footer>
  );
}