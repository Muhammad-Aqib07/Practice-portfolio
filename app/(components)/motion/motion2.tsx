"use client"

import {motion} from "framer-motion"
import ProjectBtn from '../projectBtn/ProjectBtn'
import { fadeIn } from '@/variant'

export default function Motion2() {
  return (
    <motion.div 
    variants={fadeIn("down",0.5)}
    initial="hidden"
    animate="show"
    exit={"hidden"}
    
    className="hidden xl:flex"
    >
          <ProjectBtn />
    </motion.div>
  )
}

