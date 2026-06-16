import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, staggerContainer } from '../lib/motion'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
}

export default function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <motion.span
              variants={fadeUp}
              className="chip mb-4 uppercase tracking-[0.2em] text-accent-cyan"
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-slate-400">
              {description}
            </motion.p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
