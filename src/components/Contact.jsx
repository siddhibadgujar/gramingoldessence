import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = encodeURIComponent(
      `Hello, my name is ${name}.
Email: ${email}
Message: ${message}`
    );

    window.open(
      `https://wa.me/919168065856?text=${whatsappMessage}`,
      "_blank"
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <section id="contact" className="relative py-16 px-4 bg-gray-50">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border p-3 rounded mb-4 focus:outline-green-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border p-3 rounded mb-4 focus:outline-green-600"
            />

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
              className="w-full border p-3 rounded mb-6 focus:outline-green-600 resize-none"
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-10 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-gray-700"
          >
            {/* Phone Numbers */}
            <div className="flex items-start gap-4 group">
              <FiPhone className="text-green-600 text-2xl mt-1 group-hover:scale-110 transition" />
              <div className="space-y-1">
                <p className="font-medium">Customer Support</p>
                <p>+91 91680 65856</p>
                <p>+91 70583 85618</p>
                <p>+91 80807 50257</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 group">
              <FiMail className="text-green-600 text-2xl mt-1 group-hover:scale-110 transition" />
              <p className="group-hover:text-green-700 transition">
                info@gramingoldessence.com
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 group">
              <FiMapPin className="text-green-600 text-2xl mt-1 group-hover:scale-110 transition" />
              <p className="group-hover:text-green-700 transition">
                Plot no 12, Shikshak Society, Ring Road,
                <br />
                Jalgaon – 425001, Maharashtra
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://www.instagram.com/infogramingoldessence?igsh=MTF0N3VvbGpqZWI1bA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 text-2xl hover:scale-110 hover:text-green-700 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/gramin-gold-essence-essence-aa90563a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 text-2xl hover:scale-110 hover:text-green-700 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

     
    </>
  );
}