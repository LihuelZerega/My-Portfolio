"use client";
import React from "react";
import { motion } from "framer-motion";
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
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { AiFillHtml5, AiOutlineCloudUpload } from "react-icons/ai";

const skills = [
  { icon: AiFillHtml5, label: "HTML" },
  { icon: BiLogoCss3, label: "CSS" },
  { icon: BiLogoJavascript, label: "JavaScript" },
  { icon: BiLogoTypescript, label: "TypeScript" },
  { icon: BiLogoReact, label: "React" },
  { icon: BiLogoRedux, label: "Redux" },
  { icon: BiLogoPostgresql, label: "PostgreSQL" },
  { icon: BiLogoTailwindCss, label: "Tailwind CSS" },
  { icon: BiLogoNodejs, label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: AiOutlineCloudUpload, label: "Cloudinary" },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center dark:bg-[#121212] py-12 rounded-md mx-6">
      <h1 className="text-4xl font-bold">My Skills</h1>
      <section className="grid grid-cols-2 sm:grid-cols-4 mt-8 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            key={index}
            className="flex flex-col box-border h-36 w-36 justify-center items-center bg-white-500/[.03] shadow-xl backdrop-blur-md rounded-xl border-white dark:bg-[#202020]"
          >
            <motion.div>
              <skill.icon className="text-7xl" />
            </motion.div>
            <h1 className="font-bold text-lg mt-1">{skill.label}</h1>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Skills;