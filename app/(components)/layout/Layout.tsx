import { Sora } from "next/font/google";

import { AnimatePresence, motion } from "framer-motion";
import Motion from "../motion/motion";
import { Nav } from "../nav/Nav";
import { usePathname } from "next/navigation";
import TopleftImg from "../topleftimg/TopleftImg";
import Header from "../header/Header";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Layout({ children }: { children: any }) {
  const path=usePathname()
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
   <TopleftImg/>
   <Nav/>
   <Header />
      {children}
   
    </div>
  );
}
