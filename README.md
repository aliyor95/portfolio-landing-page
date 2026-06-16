# Портфолио · Эргашев Алиёр

Премиальный, анимированный одностраничный сайт-портфолио (Frontend Developer & QA Engineer).
Тёмная тема, glassmorphism, плавные анимации на скролле. Готов к деплою на GitHub Pages.

## Стек

- **React 19** + **TypeScript**
- **Vite** — сборка и dev-сервер
- **Tailwind CSS** — стилизация (dark mode, glassmorphism)
- **Framer Motion** — анимации
- **lucide-react** — иконки (+ кастомные брендовые SVG для GitHub/LinkedIn/Telegram)

## Структура

```
src/
  components/   Navbar, Hero, About, Skills, Experience, Contact, Footer, Section, Background, BrandIcons
  data/         content.ts  — весь текстовый контент в одном месте
  lib/          motion.ts   — переиспользуемые Framer Motion варианты
public/
  cv-ergashev-aliyor.pdf    — CV (плейсхолдер, замените на свой)
  favicon.svg
```

Весь контент вынесен в `src/data/content.ts` — редактируйте текст там.

## Локальный запуск

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # сборка в dist/
npm run preview  # предпросмотр сборки
npm run lint
```

## Деплой на GitHub Pages

Деплой автоматический через GitHub Actions (`.github/workflows/deploy.yml`):

1. В настройках репозитория: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
2. Запушьте в ветку `main` — сайт соберётся и опубликуется на
   `https://aliyor95.github.io/portfolio/`.

Базовый путь задаётся в `vite.config.ts` (`base: '/portfolio/'`). Для своего домена
или другого имени репозитория переопределите через переменную окружения `BASE_PATH`.

## Замена CV

Файл `public/cv-ergashev-aliyor.pdf` — это сгенерированный плейсхолдер.
Замените его своим PDF (имя файла оставьте прежним) или обновите `personal.cvUrl`
в `src/data/content.ts`.
