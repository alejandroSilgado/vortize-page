import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
}

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
}

export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
}

// Utility functions for consistent styling
export const buttonVariants = {
  primary: "btn-primary text-white font-semibold py-3 px-6 rounded-xl",
  secondary: "btn-secondary font-semibold py-3 px-6 rounded-xl",
  ghost: "bg-transparent hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
}

export const cardVariants = {
  default: "card-dark rounded-2xl p-6",
  elevated: "card-dark rounded-2xl p-8 hover:shadow-purple",
  glass: "glass-dark rounded-2xl p-6"
}

export const textVariants = {
  heading: "text-white font-bold tracking-tight",
  subheading: "text-gray-300 font-medium",
  body: "text-gray-400 leading-relaxed",
  accent: "gradient-text font-semibold"
}