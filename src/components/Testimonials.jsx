import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const initialTestimonials = [
  { id: 1, name: "Riya Bhangale", text: "Gramin Gold Essence products are top-notch! Quality and delivery are impeccable." },
  { id: 2, name: "Sakshi Patil", text: "Loved the banana powder! Very pure and natural, exactly as described." },
  { id: 3, name: "Anand Joshi", text: "The khandeshi masala has an authentic taste. My customers loved it!" },
  { id: 4, name: "Priya More", text: "Excellent service and premium quality products. Highly recommended!" },
  { id: 5, name: "Suresh Patil", text: "Consistently good quality and smooth delivery. Will order again." },
];

export default function Testimonials() {
  const [seeAll, setSeeAll] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  const visibleTestimonials = testimonials.slice(0, 3);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = { id: testimonials.length + 1, name, text: message };
    const updated = [newTestimonial, ...testimonials];
    if (updated.length > 5) updated.pop();
    setTestimonials(updated);
    setName("");
    setMessage("");
  };

  // Framer-motion variants for smooth staggered animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>

        {/* Carousel / Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative"
            >
              <FaQuoteLeft className="text-green-600 text-5xl absolute -top-4 left-4" />
              <p className="text-gray-700 mt-4">{testimonial.text}</p>
              <p className="mt-4 font-semibold text-green-700">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>

        {/* See All button */}
        <div className="text-center mb-12">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            onClick={() => setSeeAll(true)}
          >
            See All
          </button>
        </div>

        {/* Overlay for all testimonials */}
        {seeAll && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-20 z-50 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-3xl w-full p-6 relative"
            >
              <button
                className="absolute top-4 right-4 text-gray-600 font-bold text-xl"
                onClick={() => setSeeAll(false)}
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">
                All Testimonials
              </h3>

              <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
                {testimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100"
                  >
                    <p className="text-gray-700">{testimonial.text}</p>
                    <p className="mt-2 font-semibold text-green-700">{testimonial.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Submission Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md border border-gray-100 max-w-3xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-green-700 mb-6 text-center">
            Share Your Feedback
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded w-full focus:outline-green-600 mb-4"
            required
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-3 rounded w-full focus:outline-green-600 mb-4 resize-none"
            rows={4}
            required
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-10 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}