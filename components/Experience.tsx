"use client";
import React from "react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <div className="py-6 px-12">
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
            <h1 className="text-2xl font-semibold">Edition and Design</h1>
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
            <h1 className="text-2xl font-semibold">Diseñador UI/UX</h1>
            <h3 className="text-gray-600">2021 - 2023</h3>
          </div>
          <h2 className="text-lg text-gray-600">Empresa B</h2>
          <p className="text-gray-600 mt-2">
            Diseñé interfaces de usuario y experiencias de usuario.
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
            <h1 className="text-2xl font-semibold">Diseñador UI/UX</h1>
            <h3 className="text-gray-600">2021 - 2023</h3>
          </div>
          <h2 className="text-lg text-gray-600">Empresa C</h2>
          <p className="text-gray-600 mt-2">
            Lideré proyectos de desarrollo de software.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
