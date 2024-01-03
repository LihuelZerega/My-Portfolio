"use client";
import React from "react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <div className="py-6 px-12 dark:bg-[#121212] mx-6 rounded-md">
      <h1 className="text-4xl font-bold text-center mb-8">Experience</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {/* CARD 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold dark:text-[#121212]">Edition and Design</h1>
            <h3 className="text-gray-600">2021 - 2023</h3>
          </div>
          <h2 className="text-lg text-gray-600">Freelance</h2>
          <p className="text-gray-600 mt-2">
            Design scenes and flyers for twitch streamers.
          </p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold dark:text-[#121212]">Sales</h1>
            <h3 className="text-gray-600">2021 - 2023</h3>
          </div>
          <h2 className="text-lg text-gray-600">Luzuriaga Sillones</h2>
          <p className="text-gray-600 mt-2">
            Attention to the public both virtually and in person, providing
            advice and resolving inquiries.
          </p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold dark:text-[#121212]">Community Manager</h1>
            <h3 className="text-gray-600">2021 - 2023</h3>
          </div>
          <h2 className="text-lg text-gray-600">Luzuriaga Sillones</h2>
          <p className="text-gray-600 mt-2">
            Management of the Instagram page, creating publications and stories
            to promote the products.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
