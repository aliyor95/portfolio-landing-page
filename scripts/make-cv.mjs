// Generates a simple one-page placeholder CV PDF (Latin text, base-14 font).
// Replace public/cv-ergashev-aliyor.pdf with your real CV when ready.
import { writeFileSync } from 'node:fs'

const lines = [
  ['ERGASHEV ALIYOR', 20, 'F2'],
  ['Frontend Developer & QA Engineer', 13, 'F1'],
  ['', 8, 'F1'],
  ['Phone:    +998 99 791 95 34', 11, 'F1'],
  ['Email:    aliyor2020@gmail.com', 11, 'F1'],
  ['Telegram: @Aliyor95', 11, 'F1'],
  ['GitHub:   github.com/aliyor95', 11, 'F1'],
  ['LinkedIn: linkedin.com/in/aliyor-ergashev-5a26421bb', 11, 'F1'],
  ['', 8, 'F1'],
  ['SUMMARY', 13, 'F2'],
  ['5+ years in IT. React SPA development, QA and B2B platforms.', 11, 'F1'],
  ['AI-Driven Development and Prompt Engineering practitioner.', 11, 'F1'],
  ['', 8, 'F1'],
  ['EXPERIENCE', 13, 'F2'],
  ['Uzasiaexport B2B platform — IT Specialist (2022 - present)', 11, 'F1'],
  ['  Frontend & system architecture, QA of key processes.', 11, 'F1'],
  ['15+ deployed projects — React SPA & QA (5+ years)', 11, 'F1'],
  ['', 8, 'F1'],
  ['SKILLS', 13, 'F2'],
  ['JavaScript, TypeScript, React, Python, HTML, CSS,', 11, 'F1'],
  ['Bootstrap, Tailwind CSS, Manual/Automated Testing, QA,', 11, 'F1'],
  ['Prompt Engineering, SPA Architecture, Photoshop, Canva.', 11, 'F1'],
  ['', 8, 'F1'],
  ['LANGUAGES', 13, 'F2'],
  ['Uzbek (Native), Russian (Fluent)', 11, 'F1'],
  ['', 10, 'F1'],
  ['Note: placeholder CV — replace with your real PDF.', 9, 'F1'],
]

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

let y = 800
let stream = 'BT\n'
for (const [text, size, font] of lines) {
  y -= size + 6
  stream += `/${font} ${size} Tf\n1 0 0 1 56 ${y} Tm\n(${esc(text)}) Tj\n`
}
stream += 'ET\n'

const objects = []
objects.push('<< /Type /Catalog /Pages 2 0 R >>')
objects.push('<< /Type /Pages /Kids [3 0 R] /Count 1 >>')
objects.push(
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] ' +
    '/Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>',
)
objects.push(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`)
objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>')

let pdf = '%PDF-1.4\n'
const offsets = []
objects.forEach((obj, i) => {
  offsets.push(pdf.length)
  pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`
})
const xref = pdf.length
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
offsets.forEach((off) => {
  pdf += `${String(off).padStart(10, '0')} 00000 n \n`
})
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`

writeFileSync(new URL('../public/cv-ergashev-aliyor.pdf', import.meta.url), pdf, 'latin1')
console.log('Wrote public/cv-ergashev-aliyor.pdf')
