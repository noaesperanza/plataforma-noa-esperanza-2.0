// src/pages/Home.tsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Nôa Esperanza
        </h1>
        <nav className="flex gap-6">
          <Link to="/chat" className="hover:text-pink-400">Chat</Link>
          <Link to="/paciente" className="hover:text-pink-400">Paciente</Link>
          <Link to="/medico" className="hover:text-pink-400">Médico</Link>
          <Link to="/profissional" className="hover:text-pink-400">Profissional</Link>
          <Link to="/admin" className="hover:text-pink-400">Admin</Link>
          <Link to="/relatorio" className="hover:text-pink-400">Relatório</Link>
          <Link to="/config" className="hover:text-pink-400">Configurações</Link>
          <Link to="/perfil" className="hover:text-pink-400">Perfil</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center px-8 py-20">
        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          Bem-vindo à{" "}
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            Plataforma Nôa Esperanza
          </span>
        </h2>

        <p className="text-lg text-gray-300 max-w-2xl mb-10">
          Escolha uma das áreas para navegar dentro da plataforma.
        </p>

        {/* Lista de Navegação */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg font-medium">
          <li><Link to="/chat" className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700">Chat Principal</Link></li>
          <li><Link to="/paciente" className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700">Dashboard Paciente</Link></li>
          <li><Link to="/medico" className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700">Dashboard Médico</Link></li>
          <li><Link to="/profissional" className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700">Dashboard Profissional</Link></li>
          <li><Link to="/admin" className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700">Dashboard Admin</Link></li>
          <li><Link to="/relatorio" className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700">Relatório Narrativo</Link></li>
          <li><Link to="/config" className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700">Configurações</Link></li>
          <li><Link to="/perfil" className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700">Perfil</Link></li>
        </ul>

        {/* Rodapé */}
        <p className="mt-16 text-sm text-gray-500">
          Página inicial de navegação para todas as rotas principais.
        </p>
      </main>
    </div>
  );
}
