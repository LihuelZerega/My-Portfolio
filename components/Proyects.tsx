"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import ProyectCardModalFoods from "./ProjectModals/ProyectCardModalFoods";

const Projects: React.FC = () => {
  return (
    <div className="bg-white shadow-2xl p-6 ">
      <div className="flex flex-col text-center">
        <h1 className="text-4xl font-bold p-4">Projects</h1>
      </div>

      <div className="space-y-12">
        <section className="flex flex-row items-center justify-center gap-6">
          <div onClick={ProyectCardModalFoods}>
            <ProjectCard
              title="Foods"
              description="Soy Henry | PI"
              imageUrl="https://res.cloudinary.com/dszjgdktf/image/upload/v1693579071/FoodsPreviewPortfolio_aebgst.png"
            />
          </div>
          <ProjectCard
            title="Pig Commander"
            description="Soy Henry | PF"
            imageUrl="https://res.cloudinary.com/dszjgdktf/image/upload/v1693579071/PigCommanderPreviewPortfolio_fg86yv.png"
          />
          <ProjectCard
            title="Coming soon..."
            description="Coming soon..."
            imageUrl="https://res.cloudinary.com/dszjgdktf/image/upload/v1693346764/samples/animals/kitten-playing.gif"
          />
        </section>

        <section className="flex flex-row items-center justify-center gap-6">
          <ProjectCard
            title="Coming soon..."
            description="Coming soon..."
            imageUrl="https://res.cloudinary.com/dszjgdktf/image/upload/v1693346764/samples/animals/kitten-playing.gif"
          />
          <ProjectCard
            title="Coming soon..."
            description="Coming soon..."
            imageUrl="https://res.cloudinary.com/dszjgdktf/image/upload/v1693346764/samples/animals/kitten-playing.gif"
          />
          <ProjectCard
            title="Coming soon..."
            description="Coming soon..."
            imageUrl="https://res.cloudinary.com/dszjgdktf/image/upload/v1693346764/samples/animals/kitten-playing.gif"
          />
        </section>
      </div>
    </div>
  );
};

export default Projects;
