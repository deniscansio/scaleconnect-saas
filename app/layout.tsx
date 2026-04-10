import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ScaleConnect - Plataforma SaaS de Vendas e Carreira',
  description: 'Conectando Candidatos, Empresas e Parceiros Educacionais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
