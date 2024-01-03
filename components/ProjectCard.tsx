'use client'
import Image from "next/image";
import React, { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-[#202020]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageUrl} alt={title} width={100} height={100} className={`${isHovered ? "blur-md" : ""}`} />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-30 text-white transition-opacity opacity-0 hover:opacity-100">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
