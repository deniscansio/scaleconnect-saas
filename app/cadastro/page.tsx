'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './cadastro.module.css'

export default function Cadastro() {
  const [userType, setUserType] = useState<'candidato' | 'empresa' | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!')
      return
    }
    setLoading(true)
    // Aqui você adicionaria a lógica de cadastro
    console.log('Cadastro:', { userType, ...formData })
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <h1>ScaleConnect</h1>
          <p>Crie sua conta</p>
        </div>

        {!userType ? (
          <div className={styles.typeSelection}>
            <h2>Qual é o seu perfil?</h2>
            <button
              className={styles.typeBtn}
              onClick={() => setUserType('candidato')}
            >
              👤 Sou Candidato
            </button>
            <button
              className={styles.typeBtn}
              onClick={() => setUserType('empresa')}
            >
              🏢 Sou Empresa
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome Completo</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Crie uma senha"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirmar Senha</label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirme sua senha"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'Cadastrando...' : 'Cadastrar'}
              </button>
            </form>

            <button
              className={styles.backBtn}
              onClick={() => setUserType(null)}
            >
              ← Voltar
            </button>
          </>
        )}

        <div className={styles.footer}>
          <p>
            Já tem conta? <Link href="/login">Faça login aqui</Link>
          </p>
          <p>
            <Link href="/">Voltar para a página inicial</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
