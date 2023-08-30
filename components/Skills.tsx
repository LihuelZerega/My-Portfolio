'use client'
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoNodejs,
} from "react-icons/bi";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="flex flex-col text-center">
      <h1 className="text-4xl font-bold">My Skills</h1>
      <section className="p-6 space-y-8">
        <div className="flex flex-row items-center justify-center gap-4">
          {/* HTML */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col box-border h-36 w-36 justify-center items-center bg-white-500/[.03] shadow-xl backdrop-blur-md rounded-xl border-white"
          >
            <AiFillHtml5 className="text-7xl" />
            <h1 className="font-bold text-lg mt-1">HTML</h1>
          </motion.div>

          {/* CSS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col box-border h-36 w-36 justify-center items-center bg-white-500/[.03] shadow-xl backdrop-blur-md rounded-xl border-white"
          >
            <BiLogoCss3 className="text-7xl" />
            <h1 className="font-bold text-lg mt-1">CSS</h1>
          </motion.div>

          {/* JavaScript */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col box-border h-36 w-36 justify-center items-center bg-white-500/[.03] shadow-xl backdrop-blur-md rounded-xl border-white"
          >
            <BiLogoJavascript className="text-7xl" />
            <h1 className="font-bold text-lg mt-1">JavaScript</h1>
          </motion.div>

          {/* TypeScript */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col box-border h-36 w-36 justify-center items-center bg-white-500/[.03] shadow-xl backdrop-blur-md rounded-xl border-white"
          >
            <BiLogoTypescript className="text-7xl" />
            <h1 className="font-bold text-lg mt-1">TypeScript</h1>
          </motion.div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          {/* React */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col box-border h-36 w-36 justify-center items-center bg-white-500/[.03] shadow-xl backdrop-blur-md rounded-xl border-white"
          >
            <BiLogoReact className="text-7xl" />
            <h1 className="font-bold text-lg mt-1">React</h1>
          </motion.div>

          {/* Redux */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col box-border h-36 w-36 justify-center items-center bg-white-500/[.03] shadow-xl backdrop-blur-md rounded-xl border-white"
          >
            <BiLogoRedux className="text-7xl" />
            <h1 className="font-bold text-lg mt-1">Redux</h1>
          </motion.div>

          {/* Postgre SQL */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col box-border h-36 w-36 justify-center items-center bg-white-500/[.03] shadow-xl backdrop-blur-md rounded-xl border-white"
          >
            <BiLogoPostgresql className="text-7xl" />
            <h1 className="font-bold text-lg mt-1">Postgre SQL</h1>
          </motion.div>

          {/* Tailwind CSS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col box-border h-36 w-36 justify-center items-center bg-white-500/[.03] shadow-xl backdrop-blur-md rounded-xl border-white"
          >
            <BiLogoTailwindCss className="text-7xl" />
            <h1 className="font-bold text-lg mt-1">Tailwind CSS</h1>
          </motion.div>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          {/* Node Js */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col box-border h-36 w-36 justify-center items-center bg-white-500/[.03] shadow-xl backdrop-blur-md rounded-xl border-white"
          >
            <BiLogoNodejs className="text-7xl" />
            <h1 className="font-bold text-lg mt-1">Node Js</h1>
          </motion.div>

          {/* Express Js */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col box-border h-36 w-36 justify-center items-center bg-white-500/[.03] shadow-xl backdrop-blur-md rounded-xl border-white"
          >
            <SiExpress className="text-7xl" />
            <h1 className="font-bold text-lg mt-1">Express Js</h1>
          </motion.div>

          {/* Next Js */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col box-border h-36 w-36 justify-center items-center bg-white-500/[.03] shadow-xl backdrop-blur-md rounded-xl border-white"
          >
            <SiNextdotjs className="text-7xl" />
            <h1 className="font-bold text-lg mt-1">Next Js</h1>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default Skills;