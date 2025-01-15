'use client';
import { Backend_skill, Frontend_skill, Full_stack } from '@/app/constants';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

interface SkillsImageProps {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillsImage = ({ src, width, height, index }: SkillsImageProps) => {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: animationDelay * index }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      whileHover={{ scale: 2 }}
    >
      <Image src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-20 pb-44"
      id="skills"
      style={{ transform: 'scale(0.9)' }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { x: 100, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.5,
            },
          },
        }}
        className="mb-[15px] mt-[10px] text-center text-[30px] font-medium text-white"
      >
        My Expertise
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { x: 100, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.5,
            },
          },
        }}
        className="cursive mb-10 mt-[10px] text-center text-[20px] text-gray-200"
      >
        A showcase of the tools and technologies that define my craft.
      </motion.div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Frontend_skill.map((image, index) => (
          <SkillsImage
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Backend_skill.map((image, index) => (
          <SkillsImage
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Full_stack.map((image, index) => (
          <SkillsImage
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
