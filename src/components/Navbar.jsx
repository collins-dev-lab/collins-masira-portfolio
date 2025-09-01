import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ darkMode, setDarkMode }) {
  const links = ["About", "Projects", "Skills", "Contact"];

  return (
    <nav className="sticky top-0 bg-black/40 backdrop-blur-md p-4 flex justify-between items-center shadow-md z-50">
      {/* Links with staggered animation */}
      <div className="flex gap-8">
        {links.map((link, i) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            whileHover={{ scale: 1.1, color: "#4f46e5" }}
            className="hover:underline"
          >
            {link}
          </motion.a>
        ))}
      </div>

      {/* Dark mode toggle button with animation */}
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 rounded-md bg-white text-gray-900 dark:bg-gray-700 dark:text-white shadow-md transition"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </motion.button>
    </nav>
  );
}

