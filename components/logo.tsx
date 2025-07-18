"use client"

import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const text = "Big spontino"

const bounceContainer = {
  hover: {
    transition: {
      staggerChildren: 0.03,
    },
  },
}

const bounceChar: Variants = {
  initial: { y: 0 },
  hover: {
    y: [-2, -8, 0],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function BouncingLogo({ className } : { className?:string}) {
  return (
    <Link href="/" className="inline-block">
      <motion.div
        variants={bounceContainer}
        initial="initial"
        whileHover="hover"
        className={cn(`flex cursor-pointer tracking-[0.2em] text-lg md:text-xl text-primary font-bold uppercase`, className)}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={bounceChar}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </Link>
  )
}
