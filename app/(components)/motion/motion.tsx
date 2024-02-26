"use client";
import Layout from "../layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import Transition from "../transition/Transition";
import { usePathname } from "next/navigation";


export default function Motion({ children }: { children: any }) {
  const path = usePathname();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={path} className="h-full">
          <Transition />

          {children}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
