import React from "react";
import { motion } from "framer-motion";
import bananaFlow from "../assets/about/banana.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About() {
  return (
    <section id="about" className="w-full bg-gray-50 py-20 px-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          About Us
        </motion.h2>

        {/* Image + Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="flex justify-center"
          >
            <img
              src={bananaFlow}
              alt="Banana to Powder Flow"
              className="w-full max-w-md md:max-w-lg object-contain rounded-xl shadow-sm"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="space-y-5 text-gray-700 text-center md:text-left"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              Gramin <span className="text-green-700">Gold Essence</span>
            </h3>

            <p className="text-base leading-relaxed">
              Based in <strong>Jalgaon, Maharashtra</strong> — widely known as the
              <strong> Banana City of India</strong>, Gramin Gold Essence focuses on
              sourcing and supplying reliable agro and food-grade products.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">●</span>
                <span>
                  Core products include <strong>Raw Green Banana Powder</strong> and
                  selected <strong>Indian Spice Blends</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">●</span>
                <span>
                  Focused on <strong>purity, consistency & export-ready quality</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">●</span>
                <span>
                  Serving <strong>B2B & B2C buyers</strong> across India and global markets
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">●</span>
                <span>
                  Fully compliant with <strong>FSSAI & IEC</strong> standards
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-green-600 mx-auto mb-16 rounded-full" />

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              points: [
                "Supply consistent quality agro products",
                "Maintain transparency & reliability",
                "Build long-term buyer relationships",
              ],
            },
            {
              title: "Our Vision",
              points: [
                "Become a trusted global supplier",
                "Promote Jalgaon’s banana produce",
                "Grow through ethical business practices",
              ],
            },
            {
              title: "Testimonials",
              points: [
                "Food & Beverage Manufacturers",
                "Infant & Health Food Brands",
                "Spice, Bakery & Nutraceutical Sectors",
              ],
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border-t-4 border-green-600"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {card.title}
              </h4>
              <ul className="space-y-2 text-gray-700">
                {card.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}