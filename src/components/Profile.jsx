import React from "react";
import { motion } from "framer-motion";

export default function Profile({ profile }) {
  if (!profile) return null;

  return (
    <motion.header
      id="about"
      className="text-center mb-16 pt-12"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2, duration: 1 },
        },
      }}
    >
      <motion.h1
        className="text-5xl font-extrabold"
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
      >
        {profile.name}
      </motion.h1>

      <motion.p
        className="text-xl mt-4 max-w-2xl mx-auto"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      >
        {profile.bio}
      </motion.p>

      <motion.div
        className="mt-6 flex flex-col gap-1 text-lg"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        <span>📧 {profile.email}</span>
        <span>📱 {profile.phone}</span>
      </motion.div>

      <motion.a
        href="/cv.pdf"
        download
        className="inline-block mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        📄 Download CV
      </motion.a>
    </motion.header>
  );
}
