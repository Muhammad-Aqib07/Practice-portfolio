"use client";
import Image from "next/image";
import bg from "../../../../public/avatar.png";
import { fadeIn } from "@/variant";
import { motion } from "framer-motion";

export default function Avatarmotion() {
  return (

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        transition={{ duration: 1, ease: "easeIn" }}
        className="hidden xl:flex xl:max-w-none"
      >
        <Image src={bg} alt="" width={690} height={631} />
      </motion.div>
    
  );
}
