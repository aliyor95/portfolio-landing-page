import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Section from './Section'
import { aboutPoints, stats } from '../data/content'
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Обо мне"
      title="Инженер, который превращает требования в продукт"
      description="Сочетаю разработку, архитектуру и контроль качества, чтобы создавать надёжные и быстрые веб-приложения."
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {aboutPoints.map((point) => (
            <motion.li
              key={point}
              variants={fadeUp}
              className="glass glass-hover flex gap-4 rounded-2xl p-5"
            >
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-accent-cyan" />
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{point}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 self-start"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="glass glass-hover rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-extrabold gradient-text">{stat.value}</p>
              <p className="mt-2 text-xs leading-snug text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
