import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[#2A0E61] shadow-lg">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-20 text-[40px] font-semibold text-transparent">
        My Projects
      </h1>
      <div className="flex h-full w-full flex-col gap-10 px-10 md:flex-row">
        <ProjectCard
          src="/FigmaClone.png"
          title="Figma Clone"
          description="Figma Clone using Next.js 14, Tailwind CSS, Liveblocks,Fabric"
        />
        <ProjectCard
          src="/TravelWebsite.png"
          title="Travel Website"
          description="Travel Website Using Next.js 14, Tailwind CSS, TypeScript"
        />
        <ProjectCard
          src="/YoutubeClone.png"
          title="Youtube Clone"
          description="Youtube Clone Using React, Tailwind CSS, TypeScript"
        />
      </div>
    </div>
  );
};

export default Projects;
