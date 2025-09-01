import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "JavaScript",
    "Python",
    "React",
    "Angular",
    "Django",
    "Node.js",
    "MySQL",
    "Git",
  ];

  return (
    <motion.section
      id="skills"
      className="mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 1 }}
    >
      <h2 className="text-3xl font-semibold mb-8 text-center">🛠 Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded-full shadow-md hover:shadow-lg transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
