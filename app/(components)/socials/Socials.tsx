import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

export default function Socials() {
  return <div className="flex gap-x-5  text-lg">
    <Link href={""} className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine/>
    </Link>
    <Link href={""} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
    </Link>
    <Link href={""} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine/>
    </Link>
    <Link href={""} className="hover:text-accent transition-all duration-300">
      <RiBehanceLine/>
    </Link>
    <Link href={""} className="hover:text-accent transition-all duration-300">
      <RiPinterestLine/>
    </Link>
  </div>;
}
