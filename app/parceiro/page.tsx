'use client'

import Link from 'next/link'
import styles from './parceiro.module.css'

export default function ParceiroPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Dashboard de Parceiros</h1>
        <p>Bem-vindo ao ScaleConnect!</p>
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <h2>📚 Publicar Cursos</h2>
          <p>Crie e publique cursos, treinamentos e certificações para nossos candidatos.</p>
          <button className={styles.btn}>Novo Curso</button>
        </div>

        <div className={styles.card}>
          <h2>📜 Gerenciar Certificados</h2>
          <p>Emita certificados para alunos que completarem seus cursos com sucesso.</p>
          <button className={styles.btn}>Ver Certificados</button>
        </div>

        <div className={styles.card}>
          <h2>🎯 Trilhas de Carreira</h2>
          <p>Apareça nas trilhas de carreira e atraia mais alunos interessados.</p>
          <button className={styles.btn}>Gerenciar Trilhas</button>
        </div>

        <div className={styles.card}>
          <h2>📊 Relatórios</h2>
          <p>Acompanhe o desempenho dos seus cursos e alunos inscritos.</p>
          <button className={styles.btn}>Ver Relatórios</button>
        </div>
      </div>

      <div className={styles.footer}>
        <Link href="/">← Voltar para a página inicial</Link>
      </div>
    </div>
  )
}
