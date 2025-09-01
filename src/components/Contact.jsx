import React from "react";
import { motion } from "framer-motion";

export default function Contact({ profile }) {
  if (!profile) return null;

  return (
    <motion.section
      id="contact"
      className="mt-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 1 }}
    >
      <h2 className="text-3xl font-semibold mb-6">📬 Get in Touch</h2>
      <p className="text-lg mb-4">I’d love to connect! Reach me at:</p>
      <p className="text-xl font-medium">📧 {profile.email}</p>
      <p className="text-xl font-medium">📱 {profile.phone}</p>
      <div className="mt-6 flex justify-center gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Twitter
        </a>
      </div>
    </motion.section>
  );
}
