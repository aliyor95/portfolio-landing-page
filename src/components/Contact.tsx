import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Section from './Section'
import { socials, personal } from '../data/content'
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion'

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Контакты"
      title="Давайте обсудим ваш проект"
      description="Открыт для интересных задач, сотрудничества и новых возможностей. Свяжитесь со мной удобным способом."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              variants={scaleIn}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="glass glass-hover group flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-accent-violet/30 text-accent-cyan">
                <s.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-slate-500">{s.label}</span>
                <span className="block truncate text-sm font-medium text-slate-200">{s.value}</span>
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-slate-600 transition-colors group-hover:text-accent-cyan" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass relative flex flex-col justify-center overflow-hidden rounded-3xl p-8"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <h3 className="text-2xl font-bold text-white">Готов к новым проектам</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Напишите мне на email или в Telegram — отвечу в течение дня. Обсудим задачу, сроки и лучший
            технический подход.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${personal.email}`} className="btn-primary">
              Написать на Email
            </a>
            <a
              href={personal.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
