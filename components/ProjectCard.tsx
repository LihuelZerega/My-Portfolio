'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link href={projectUrl}>
      <div
        className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ width: "240px", height: "240px" }}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={240}
          height={240}
          className={`w-auto h-auto ${isHovered ? "blur-md" : ""}`}
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-30 text-white transition-opacity opacity-0 hover:opacity-100">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;