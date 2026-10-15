import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SELIA Study · Экспорт российского образования | LLC MARKO-co',
  description: 'SELIA Study — проект LLC MARKO-co. Профессиональная поддержка иностранных абитуриентов из арабских стран и Африки.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}