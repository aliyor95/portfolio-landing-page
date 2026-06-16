import type { ComponentType } from 'react'
import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon } from '../components/BrandIcons'

export type IconType = ComponentType<{ className?: string }>

export const personal = {
  name: 'Эргашев Алиёр',
  nameEn: 'Ergashev Aliyor',
  role: 'Frontend Developer & QA Engineer',
  subtitle:
    'Более 5 лет опыта в сфере IT. Специализируюсь на разработке быстрых и масштабируемых SPA React приложений, тестировании (QA) и создании сложных B2B платформ.',
  email: 'aliyor2020@gmail.com',
  phone: '+998 99 791 95 34',
  phoneHref: '+998997919534',
  telegram: '@Aliyor95',
  telegramHref: 'https://t.me/Aliyor95',
  github: 'https://github.com/aliyor95',
  linkedin: 'https://www.linkedin.com/in/aliyor-ergashev-5a26421bb/',
  cvUrl: './cv-ergashev-aliyor.pdf',
} as const

export const stats: { value: string; label: string }[] = [
  { value: '5+', label: 'лет в IT' },
  { value: '15+', label: 'внедрённых проектов' },
  { value: '4', label: 'года на B2B платформе' },
  { value: '2', label: 'языка' },
]

export const aboutPoints: string[] = [
  'Успешно завершил и внедрил (deploy) более 15 проектов, включая сложные веб-приложения и SPA.',
  'Последние 4 года работаю IT-специалистом на B2B платформе «Uzasiaexport».',
  'Активно использую «AI-Driven Development» и Prompt Engineering — интеграцию AI-инструментов в рабочий процесс для ускорения написания кода, тестирования и проектирования архитектуры.',
  'Имею сильный опыт в анализе сложных технических требований, трансформации их в надёжные веб-приложения, а также в обеспечении контроля качества (QA).',
]

export type SkillGroup = {
  title: string
  skills: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Программирование и технологии',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'React', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Python', level: 70 },
    ],
  },
  {
    title: 'QA и методологии',
    skills: [
      { name: 'Manual / Automated Testing', level: 88 },
      { name: 'Quality Assurance', level: 90 },
      { name: 'Prompt Engineering', level: 92 },
      { name: 'SPA Architecture', level: 88 },
    ],
  },
  {
    title: 'Дизайн и медиа',
    skills: [
      { name: 'Adobe Photoshop', level: 80 },
      { name: 'Canva', level: 85 },
      { name: 'Adobe Premiere Pro', level: 75 },
    ],
  },
]

export const languages: { name: string; level: string; percent: number }[] = [
  { name: 'Узбекский', level: 'Родной', percent: 100 },
  { name: 'Русский', level: 'Свободно', percent: 95 },
]

export type ExperienceItem = {
  period: string
  title: string
  company: string
  description: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: '2022 — наст. время',
    title: 'IT-специалист · Frontend & System Architecture',
    company: 'B2B платформа «Uzasiaexport»',
    description:
      'Развитие и поддержка крупной B2B экспортной платформы: проектирование архитектуры фронтенда, реализация интерфейсов и обеспечение стабильности системы.',
    highlights: [
      'Проектирование и развитие системной архитектуры фронтенда',
      'Реализация масштабируемых React-интерфейсов для B2B-пользователей',
      'Контроль качества и тестирование ключевых бизнес-процессов',
    ],
  },
  {
    period: '5+ лет',
    title: '15+ внедрённых проектов · React SPA & QA',
    company: 'Коммерческие и собственные проекты',
    description:
      'Полный цикл разработки веб-приложений: от анализа требований до деплоя. Фокус на производительности SPA и качестве через продуманные QA-процессы.',
    highlights: [
      'Разработка и деплой более 15 веб-приложений и SPA на React',
      'Внедрение QA-процессов: ручное и автоматизированное тестирование',
      'Использование AI-Driven Development для ускорения разработки',
    ],
  },
]

export type SocialLink = {
  label: string
  value: string
  href: string
  icon: IconType
}

export const socials: SocialLink[] = [
  { label: 'Телефон', value: personal.phone, href: `tel:${personal.phoneHref}`, icon: Phone },
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: 'Telegram', value: personal.telegram, href: personal.telegramHref, icon: TelegramIcon },
  { label: 'LinkedIn', value: 'aliyor-ergashev', href: personal.linkedin, icon: LinkedinIcon },
  { label: 'GitHub', value: 'aliyor95', href: personal.github, icon: GithubIcon },
]

export const navLinks: { label: string; href: string }[] = [
  { label: 'Главная', href: '#hero' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Контакты', href: '#contact' },
]
