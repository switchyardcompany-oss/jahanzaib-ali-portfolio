"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { fadeIn } from "@/variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-linear-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6"
          >
            I design and build fast, conversion-focused websites and custom
            web applications — turning ordinary visitor traffic into a
            measurable signal: enquiries, sign-ups, and sales.
          </motion.p>

          <motion.p
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-sm text-white/60"
          >
            Currently: Full-Stack Dev @ Dexora Digital · Based in: Multan,
            Punjab — PK · Focus: Next.js · WordPress · CRO
          </motion.p>

          <div className="flex justify-center gap-x-4 xl:hidden relative">
            <ProjectsBtn />
            <Link
              href="/contact"
              className="btn rounded-full px-8 border border-white/50 flex items-center hover:border-accent transition-all duration-300"
            >
              Let&apos;s Talk
            </Link>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex gap-x-4"
          >
            <ProjectsBtn />
            <Link
              href="/contact"
              className="btn rounded-full px-8 border border-white/50 flex items-center hover:border-accent transition-all duration-300"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="w-7xl h-full absolute right-0 bottom-0 pointer-events-none">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-160 max-h-150 absolute -bottom-18 lg:bottom-8 lg:right-[8%] xl:scale-75 xl:origin-bottom-right"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
