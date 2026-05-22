"use client"

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion"

/**
 * Fixed-position diagonal-line decorative panels in the four corners
 * of the viewport. They animate based on scroll progress:
 *  • Slight rotation as you scroll deeper
 *  • Opacity rises past the fold
 *  • Slow position drift via the diag-drift CSS animation
 */
export function ScrollCorners() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  // All transforms declared at top level (no hook calls inside JSX)
  const rotateA = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-6, 8])
  const rotateB = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [6, -8])
  const rotateC = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [4, -6])
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.32, 0.55, 0.55, 0.38],
  )

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[5]">
      <motion.div
        style={{ rotate: rotateA, opacity }}
        className="diag-gold-bold animate-diag absolute -top-10 -left-10 h-44 w-44 origin-top-left rounded-md md:h-56 md:w-56"
      />
      <motion.div
        style={{ rotate: rotateB, opacity }}
        className="diag-gold-bold animate-diag-r absolute -top-10 -right-10 h-44 w-44 origin-top-right rounded-md md:h-56 md:w-56"
      />
      <motion.div
        style={{ rotate: rotateC, opacity }}
        className="diag-gold animate-diag absolute -bottom-10 -left-10 h-40 w-40 origin-bottom-left rounded-md md:h-52 md:w-52"
      />
      <motion.div
        style={{ rotate: rotateA, opacity }}
        className="diag-gold animate-diag-r absolute -bottom-10 -right-10 h-40 w-40 origin-bottom-right rounded-md md:h-52 md:w-52"
      />
    </div>
  )
}
