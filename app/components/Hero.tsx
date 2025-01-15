'use client';
import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full" id={'about'}>
      <div className="paddingX absolute inset-0 top-[120px] mx-2 flex max-w-7xl flex-row items-start gap-5">
        <motion.div
          initial="hidden"
          animate="visible"
          className="z-[20] mt-40 flex w-full flex-row items-center justify-center px-8"
        >
          <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-start">
            <motion.div
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                },
              }}
              className="max-w--[600px] mt-6 flex h-auto w-auto flex-col gap-6 text-6xl font-bold text-white"
            >
              <span>
                Hi! I am
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  {' '}
                  Bhavya{' '}
                </span>
              </span>
            </motion.div>
            <motion.p
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                    duration: 0.5,
                  },
                },
              }}
              className="my-5 max-w-[600px] text-lg text-gray-400"
            >
              I&apos;m a Full Stack Software Engineer with experience in
              Website. Mobile, and Software development. Check out my projects
              and skills.
            </motion.p>
          </div>
        </motion.div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute -right-[50%] -top-[15%] z-[-1] h-[150%] w-full -rotate-90 object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-2">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'loop',
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
