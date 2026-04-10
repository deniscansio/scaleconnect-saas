'use client'

import Link from 'next/link'
import styles from './candidato.module.css'

export default function CandidatoPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Dashboard de Candidatos</h1>
        <p>Bem-vindo ao ScaleConnect!</p>
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <h2>🎯 Encontre Vagas</h2>
          <p>Explore oportunidades de emprego alinhadas com seu perfil e objetivos de carreira.</p>
          <button className={styles.btn}>Buscar Vagas</button>
        </div>

        <div className={styles.card}>
          <h2>💼 Oportunidades Comerciais</h2>
          <p>Ganhe comissões participando de projetos de vendas e geração de leads.</p>
          <button className={styles.btn}>Ver Oportunidades</button>
        </div>

        <div className={styles.card}>
          <h2>📚 Trilha de Carreira</h2>
          <p>Acesse cursos, certificações e conteúdos para acelerar seu crescimento profissional.</p>
          <button className={styles.btn}>Explorar Trilhas</button>
        </div>

        <div className={styles.card}>
          <h2>💰 Meus Ganhos</h2>
          <p>Acompanhe suas comissões, vendas realizadas e histórico de ganhos.</p>
          <button className={styles.btn}>Ver Ganhos</button>
        </div>
      </div>

      <div className={styles.footer}>
        <Link href="/">← Voltar para a página inicial</Link>
      </div>
    </div>
  )
}
