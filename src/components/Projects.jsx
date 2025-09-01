import React from "react";
import { motion } from "framer-motion";

export default function Projects({ projects }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.section
      id="projects"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mt-12"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center">🚀 My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2">
              <strong>Tech Stack:</strong> {p.tech_stack}
            </p>
            <div className="mt-4 flex gap-4">
              {p.github_link && (
                <a
                  href={p.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  GitHub
                </a>
              )}
              {p.live_link && (
                <a
                  href={p.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
