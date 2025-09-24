import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold" }}>Bem-vindo à Plataforma Nôa Esperanza</h1>
      <p style={{ margin: "16px 0" }}>Escolha uma das áreas para navegar:</p>
      <ul style={{ listStyle: "none", padding: 0, fontSize: 20 }}>
        <li><Link to="/chat">Chat Principal</Link></li>
        <li><Link to="/paciente">Dashboard Paciente</Link></li>
        <li><Link to="/medico">Dashboard Médico</Link></li>
        <li><Link to="/profissional">Dashboard Profissional</Link></li>
        <li><Link to="/admin">Dashboard Admin</Link></li>
        <li><Link to="/relatorio">Relatório Narrativo</Link></li>
        <li><Link to="/config">Configurações</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
      </ul>
      <p style={{ marginTop: 32, color: '#888' }}>
        Página inicial de navegação para todas as rotas principais.
      </p>
    </div>
  );
}
