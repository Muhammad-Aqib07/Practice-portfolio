import Image from "next/image";
import bg from "../../../public/avatar.png"
import { fadeIn, } from '@/variant'
import {motion} from "framer-motion"
import Avatarmotion from "./(components)/Avatarmotion";
export default function Avatar() {
  return (
    <div className="w-full h-full max-w-[600px] max-h-[650px] absolute -bottom-32 lg:bottom-[0 lg:right-[8%]  "> 
    <Avatarmotion/>
    </div>
  )
}
