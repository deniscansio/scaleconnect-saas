'use client'

import Link from 'next/link'
import styles from './empresa.module.css'

export default function EmpresaPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Dashboard de Empresas</h1>
        <p>Bem-vindo ao ScaleConnect!</p>
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <h2>📋 Publicar Vagas</h2>
          <p>Crie e publique oportunidades de emprego para atrair os melhores candidatos.</p>
          <button className={styles.btn}>Nova Vaga</button>
        </div>

        <div className={styles.card}>
          <h2>💼 Oportunidades Comerciais</h2>
          <p>Crie campanhas de vendas e geração de leads com comissões atrativas.</p>
          <button className={styles.btn}>Nova Oportunidade</button>
        </div>

        <div className={styles.card}>
          <h2>👥 Gerenciar Candidatos</h2>
          <p>Visualize, avalie e gerencie os candidatos interessados em suas vagas.</p>
          <button className={styles.btn}>Ver Candidatos</button>
        </div>

        <div className={styles.card}>
          <h2>📊 Dashboard de Performance</h2>
          <p>Acompanhe métricas, leads gerados, vendas e ROI das suas campanhas.</p>
          <button className={styles.btn}>Ver Métricas</button>
        </div>
      </div>

      <div className={styles.footer}>
        <Link href="/">← Voltar para a página inicial</Link>
      </div>
    </div>
  )
}
