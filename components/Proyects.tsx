"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="bg-white shadow-2xl p-6 ">
      <div className="flex flex-col text-center">
        <h1 className="text-4xl font-bold p-4">Projects</h1>
      </div>

      <div className="space-y-12">
        <section className="flex flex-row items-center justify-center gap-6">
          <ProjectCard
            title="Pig Commander"
            description="Descripción del Proyecto 1."
            imageUrl="https://res.cloudinary.com/dszjgdktf/image/upload/v1693350736/Grupo_1_ude2qu.png"
            projectUrl="http://proyecto-1"
          />
          <ProjectCard
            title="Coming soon..."
            description="Coming soon..."
            imageUrl="https://res.cloudinary.com/dszjgdktf/image/upload/v1693350736/Grupo_1_ude2qu.png"
            projectUrl="http://proyecto-2"
          />
          <ProjectCard
            title="Coming soon..."
            description="Coming soon..."
            imageUrl="https://res.cloudinary.com/dszjgdktf/image/upload/v1693350736/Grupo_1_ude2qu.png"
            projectUrl="http://proyecto-3"
          />
        </section>

        <section className="flex flex-row items-center justify-center gap-6">
          <ProjectCard
            title="Coming soon..."
            description="Coming soon..."
            imageUrl="https://res.cloudinary.com/dszjgdktf/image/upload/v1693350736/Grupo_1_ude2qu.png"
            projectUrl="http://proyecto-1"
          />
          <ProjectCard
            title="Coming soon..."
            description="Coming soon..."
            imageUrl="https://res.cloudinary.com/dszjgdktf/image/upload/v1693350736/Grupo_1_ude2qu.png"
            projectUrl="http://proyecto-2"
          />
          <ProjectCard
            title="Coming soon..."
            description="Coming soon..."
            imageUrl="https://res.cloudinary.com/dszjgdktf/image/upload/v1693350736/Grupo_1_ude2qu.png"
            projectUrl="http://proyecto-3"
          />
        </section>
      </div>
    </div>
  );
};

export default Projects;
