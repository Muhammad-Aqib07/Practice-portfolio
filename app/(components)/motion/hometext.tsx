"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/variant";

export default function Hometext() {
  return (
    <>
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="h1"
      >
        Transforming Ideas <br />
        Into <span className="text-accent">Digital Reality</span>
      </motion.h1>
      <motion.p
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti
        pariatur eligendi corrupti, non esse enim aliquam rerum eaque, possimus
        repellendus.
      </motion.p>
    </>
  );
}
