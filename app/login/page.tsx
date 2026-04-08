export default function Login() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px", margin: "50px auto" }}>
      <h1>Login - ScaleConnect</h1>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input type="email" placeholder="seu@email.com" style={{ width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "5px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Senha:</label>
          <input type="password" placeholder="Sua senha" style={{ width: "100%", padding: "10px", marginTop: "5px", border: "1px solid #ccc", borderRadius: "5px" }} />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>
          Entrar
        </button>
      </form>
      <p style={{ marginTop: "20px", textAlign: "center" }}>
        <a href="/" style={{ color: "blue", textDecoration: "none" }}>Voltar</a>
      </p>
    </div>
  );
}
