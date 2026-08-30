"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-125 mx-auto text-white/60"
        >
          Client testimonials are coming soon. In the meantime, feel free to{" "}
          <a href="/contact" className="text-accent hover:underline">
            get in touch
          </a>{" "}
          to talk about your project.
        </motion.p>
      </div>
    </div>
  );
};

export default Testimonials;
