import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

// Import components
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/profiles/")
      .then((res) => setProfile(res.data[0]))
      .catch((err) => console.log(err));

    axios
      .get("http://127.0.0.1:8000/api/projects/")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!profile) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white dark:bg-gray-900 dark:text-gray-100 transition-colors">
        {/* Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="p-8">
          {/* Animated Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Profile profile={profile} />
          </motion.div>

          {/* Animated Projects Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Projects projects={projects} />
          </motion.div>

          {/* Animated Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Skills />
          </motion.div>

          {/* Animated Contact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <Contact profile={profile} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;


