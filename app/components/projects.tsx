import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative max-w-96 overflow-hidden rounded-lg border border-[#2A0E61] shadow-lg">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="max-h-52 w-full object-cover"
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
      <h1 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-20 text-6xl font-semibold text-transparent">
        My Projects
      </h1>
      <div className="flex h-full w-full flex-col justify-center gap-10 px-10 md:flex-row">
        <ProjectCard
          src="/ebotify.png"
          title="Ebotify"
          description={`It is a customer support platform, specializing in chatbot development, analytics, and live chat. With the ability
to train and deploy chatbots for websites, execute WhatsApp marketing campaigns, and manage multi-channel
support across platforms like Teams, Slack, SMS, Twilio, hubspot and huli.`}
        />
        <ProjectCard
          src="/ebotifyChatbot.png"
          title="Web Chatbot"
          description="Developed a dynamic web bot with a customizable UI that can be modified through a console interface , and seamless live agent connectivity through socket.io"
        />
        <ProjectCard
          src="/mycityhunt.png"
          title="My City Hunt"
          description="a city based travel and treasure hunt game website build with next js and tailwind."
        />
      </div>
    </div>
  );
};

export default Projects;
