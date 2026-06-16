import { socials, personal } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">{personal.name}</p>
          <p className="text-sm text-slate-500">{personal.role}</p>
        </div>

        <div className="flex items-center gap-3">
          {socials
            .filter((s) => s.href.startsWith('http'))
            .map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-xl text-slate-400 glass glass-hover hover:text-white"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-slate-600">
        © {year} {personal.name}. Сделано с React, TypeScript, Tailwind CSS и Framer Motion.
      </p>
    </footer>
  )
}
