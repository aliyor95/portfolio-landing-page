import { motion } from 'framer-motion'
import { Briefcase, Rocket, ArrowUpRight } from 'lucide-react'
import Section from './Section'
import { experience } from '../data/content'
import { fadeUp, staggerContainer } from '../lib/motion'

const itemIcons = [Briefcase, Rocket]

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Опыт и проекты"
      title="Карьерный путь и ключевые результаты"
      description="Фокус на Frontend-разработке, системной архитектуре и качестве продукта."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative space-y-6 before:absolute before:left-[1.15rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-accent-violet/40 before:to-transparent md:before:left-1/2"
      >
        {experience.map((item, i) => {
          const Icon = itemIcons[i] ?? Briefcase
          const isLeft = i % 2 === 0
          return (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className={`relative pl-12 md:w-1/2 md:pl-0 ${
                isLeft ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
              }`}
            >
              <span
                className={`absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-violet text-white shadow-lg shadow-accent/40 md:left-auto ${
                  isLeft ? 'md:-right-[1.15rem]' : 'md:-left-[1.15rem]'
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>

              <div className="glass glass-hover rounded-2xl p-6">
                <span className="chip mb-3 text-accent-cyan">{item.period}</span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-sm font-medium text-accent-cyan md:justify-end">
                  {isLeft ? null : <ArrowUpRight className="h-4 w-4 md:hidden" />}
                  {item.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                <ul className={`mt-4 space-y-2 ${isLeft ? 'md:ml-auto' : ''}`}>
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className={`flex gap-2 text-sm text-slate-300 ${
                        isLeft ? 'md:flex-row-reverse md:text-right' : ''
                      }`}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
