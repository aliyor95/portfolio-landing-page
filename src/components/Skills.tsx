import { motion } from 'framer-motion'
import { Code2, ShieldCheck, Palette, Languages as LanguagesIcon } from 'lucide-react'
import Section from './Section'
import { skillGroups, languages } from '../data/content'
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion'

const groupIcons = [Code2, ShieldCheck, Palette]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-200">{name}</span>
        <span className="text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-cyan via-accent to-accent-violet"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, ease: 'easeOut', delay }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Навыки"
      title="Технологии и компетенции"
      description="Полный стек для создания современных продуктов — от кода и архитектуры до тестирования и дизайна."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group, gi) => {
          const Icon = groupIcons[gi] ?? Code2
          return (
            <motion.div
              key={group.title}
              variants={scaleIn}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-accent-violet/30 text-accent-cyan">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={si * 0.08} />
                ))}
              </div>
            </motion.div>
          )
        })}

        {/* Languages card */}
        <motion.div
          variants={scaleIn}
          className="glass glass-hover rounded-2xl p-6 md:col-span-2 lg:col-span-1"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-accent-violet/30 text-accent-cyan">
              <LanguagesIcon className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold text-white">Языки</h3>
          </div>
          <div className="space-y-4">
            {languages.map((lang, li) => (
              <div key={lang.name}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-200">{lang.name}</span>
                  <span className="text-xs text-slate-500">{lang.level}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent-cyan via-accent to-accent-violet"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: li * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 text-sm text-slate-500"
      >
        Дополнительно: AI-Driven Development, Prompt Engineering и проектирование SPA-архитектуры.
      </motion.p>
    </Section>
  )
}
