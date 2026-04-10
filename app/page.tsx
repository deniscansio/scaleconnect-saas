'use client'

import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>ScaleConnect - Plataforma SaaS de Vendas e Carreira</h1>
        <p className={styles.subtitle}>Conecte Crescimento Profissional com Oportunidades Reais</p>
        
        <p className={styles.description}>
          ScaleConnect une candidatos, empresas e parceiros educacionais em um ecossistema de vendas, aprendizado e geração de renda.
        </p>

        <div className={styles.buttonGroup}>
          <Link href="/login" className={styles.button}>
            Entrar
          </Link>
          <Link href="/cadastro" className={styles.button}>
            Cadastrar
          </Link>
        </div>

        <div className={styles.userTypes}>
          <div className={styles.card}>
            <h3>🚀 Para Candidatos</h3>
            <p>Encontre vagas, oportunidades de vendas, trilhas de carreira e ganhe comissões por leads e vendas.</p>
            <Link href="/candidato" className={styles.link}>
              Sou Candidato
            </Link>
          </div>

          <div className={styles.card}>
            <h3>🏢 Para Empresas</h3>
            <p>Publique vagas, crie oportunidades comerciais, gerencie leads e métricas em um só lugar.</p>
            <Link href="/empresa" className={styles.link}>
              Sou Empresa
            </Link>
          </div>

          <div className={styles.card}>
            <h3>📚 Para Parceiros</h3>
            <p>Publique cursos, certificações e apareça nas trilhas de carreira dos nossos candidatos.</p>
            <Link href="/parceiro" className={styles.link}>
              Sou Parceiro
            </Link>
          </div>
        </div>

        <section className={styles.pricing}>
          <h2>Planos para Empresas</h2>
          <div className={styles.plans}>
            <div className={styles.plan}>
              <h3>Basic</h3>
              <p className={styles.price}>R$ 497/mês</p>
              <ul>
                <li>✓ Publicação de vagas</li>
                <li>✓ Acesso limitado a candidatos</li>
                <li>✓ Oportunidades comerciais simples</li>
              </ul>
              <button className={styles.chooseBtn}>Escolher</button>
            </div>

            <div className={`${styles.plan} ${styles.popular}`}>
              <span className={styles.badge}>Popular</span>
              <h3>Growth</h3>
              <p className={styles.price}>R$ 997/mês</p>
              <ul>
                <li>✓ Tudo do Basic</li>
                <li>✓ Acesso a profissionais para vendas</li>
                <li>✓ Campanhas de geração de leads</li>
                <li>✓ Dashboard de performance</li>
              </ul>
              <button className={styles.chooseBtn}>Escolher</button>
            </div>

            <div className={styles.plan}>
              <h3>Scale</h3>
              <p className={styles.price}>R$ 1.997/mês</p>
              <ul>
                <li>✓ Tudo do Growth</li>
                <li>✓ Prioridade na plataforma</li>
                <li>✓ Acesso a rede ativa de leads</li>
                <li>✓ Suporte estratégico</li>
                <li>✓ Compra de leads qualificados</li>
              </ul>
              <button className={styles.chooseBtn}>Escolher</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
