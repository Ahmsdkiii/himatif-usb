'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import type { Variants, TargetAndTransition, Easing } from 'framer-motion'

interface MotionWrapperProps {
  children: ReactNode
  variants?: Variants
  className?: string
  initial?: string | TargetAndTransition
  animate?: string | TargetAndTransition
  exit?: TargetAndTransition
  transition?: {
    duration?: number
    ease?: Easing | Easing[]
    delay?: number
    [key: string]: unknown
  }
  delay?: number
}

export function MotionWrapper({
  children,
  variants,
  className,
  initial = 'initial',
  animate = 'animate',
  exit,
  transition = { duration: 0.6, ease: 'easeOut' },
  delay = 0,
}: MotionWrapperProps) {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
