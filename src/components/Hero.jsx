import { motion } from "framer-motion";
import heroImage from "../assets/hero/info_combo.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-white pt-0 sm:pt-0 overflow-x-hidden"
    >
      {/* Hero Image Container */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
          w-full
          flex
          justify-center
          items-center
          bg-white
        "
      >
        <img
          src={heroImage}
          alt="Gramin Gold Essence – Banana Powder & Spices"
          className="
            w-full
            max-w-[1400px]
            h-auto
            object-contain
          "
        />
      </motion.div>
    </section>
  );
}