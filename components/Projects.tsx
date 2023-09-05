"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Project = () => {
  const projects = [
    {
      title: "Foods",
      description: "Soy Henry | PI",
      imageUrl:
        "https://res.cloudinary.com/dszjgdktf/image/upload/v1693579071/FoodsPreviewPortfolio_aebgst.png",
        link: "https://deploy-pi-alpha.vercel.app/",
    },
    {
      title: "Pig Commander",
      description: "Soy Henry | PF",
      imageUrl:
        "https://res.cloudinary.com/dszjgdktf/image/upload/v1693579071/PigCommanderPreviewPortfolio_fg86yv.png",
        link: "https://pig-commander-client-beta.vercel.app/",
    },
    {
      title: "Coming soon...",
      description: "Coming soon...",
      imageUrl:
        "https://res.cloudinary.com/dszjgdktf/image/upload/v1693346764/samples/animals/kitten-playing.gif",
        link: "/project/foods",
    },
    {
      title: "Coming soon...",
      description: "Coming soon...",
      imageUrl:
        "https://res.cloudinary.com/dszjgdktf/image/upload/v1693346764/samples/animals/kitten-playing.gif",
        link: "/project/foods",
    },
    {
      title: "Coming soon...",
      description: "Coming soon...",
      imageUrl:
        "https://res.cloudinary.com/dszjgdktf/image/upload/v1693346764/samples/animals/kitten-playing.gif",
        link: "/project/foods",
    },
    {
      title: "Coming soon...",
      description: "Coming soon...",
      imageUrl:
        "https://res.cloudinary.com/dszjgdktf/image/upload/v1693346764/samples/animals/kitten-playing.gif",
        link: "/project/foods",
    },
    {
      title: "Coming soon...",
      description: "Coming soon...",
      imageUrl:
        "https://res.cloudinary.com/dszjgdktf/image/upload/v1693346764/samples/animals/kitten-playing.gif",
        link: "/project/foods",
    },
    {
      title: "Coming soon...",
      description: "Coming soon...",
      imageUrl:
        "https://res.cloudinary.com/dszjgdktf/image/upload/v1693346764/samples/animals/kitten-playing.gif",
        link: "/project/foods",
    },
    // Agrega más proyectos aquí
  ];

  return (
    <div className="bg-white shadow-2xl p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold p-4">Projects</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 square-container"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={200}
                height={200}
                className="w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-30 text-white transition-opacity opacity-0 hover:opacity-100">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
