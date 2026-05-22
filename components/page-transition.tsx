"use client"

import { motion, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"

/**
 * Soft page-transition wrapper. Keyed on pathname so children remount
 * on SPA nav. Timed to overlap the preloader's exit fade — the new
 * page rises into view as the overlay clears, no hard pop.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const reduce = useReducedMotion()

  if (reduce) return <>{children}</>

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.85,
        delay: 0.85,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
