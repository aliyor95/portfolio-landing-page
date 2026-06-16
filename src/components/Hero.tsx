import { motion } from 'framer-motion'
import { Download, Mail, ArrowDown, Sparkles } from 'lucide-react'
import { personal, socials, stats } from '../data/content'
import { fadeUp, staggerContainer } from '../lib/motion'

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.span variants={fadeUp} className="chip mb-6 text-accent-cyan">
            <Sparkles className="h-3.5 w-3.5" />
            Доступен для новых проектов
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-xl font-semibold gradient-text animate-shimmer sm:text-2xl"
          >
            {personal.role}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {personal.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a href={personal.cvUrl} download className="btn-primary">
              <Download className="h-4 w-4" />
              Скачать CV
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" />
              Связаться со мной
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-xl text-slate-300 glass glass-hover hover:text-white"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float glass rounded-3xl p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-2 text-xs text-slate-500">developer.ts</span>
            </div>
            <pre className="overflow-x-auto text-[13px] leading-relaxed">
              <code>
                <span className="text-accent-violet">const</span>{' '}
                <span className="text-accent-cyan">dev</span>{' '}
                <span className="text-slate-500">=</span>{' '}
                <span className="text-slate-300">{'{'}</span>
                {'\n'}
                {'  '}name: <span className="text-emerald-300">'Aliyor'</span>,{'\n'}
                {'  '}role: <span className="text-emerald-300">'Frontend & QA'</span>,{'\n'}
                {'  '}stack: [<span className="text-emerald-300">'React'</span>,{' '}
                <span className="text-emerald-300">'TS'</span>],{'\n'}
                {'  '}experience: <span className="text-amber-300">5</span>,{'\n'}
                {'  '}aiDriven: <span className="text-amber-300">true</span>,{'\n'}
                <span className="text-slate-300">{'}'}</span>
              </code>
            </pre>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {stats.slice(0, 2).map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Прокрутить вниз"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  )
}
