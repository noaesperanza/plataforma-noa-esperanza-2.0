// src/routes.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoaChatPage from "./pages/NoaChatPage";
import DashboardPaciente from "./pages/DashboardPaciente";
import DashboardMedico from "./pages/DashboardMedico";
import Configuracoes from "./pages/Configuracoes";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Chat principal */}
        <Route path="/chat" element={<NoaChatPage />} />

        {/* Dashboards */}
        <Route path="/paciente" element={<DashboardPaciente />} />
        <Route path="/medico" element={<DashboardMedico />} />

        {/* Configurações e Perfil */}
        <Route path="/config" element={<Configuracoes />} />
        <Route path="/perfil" element={<Perfil />} />

        {/* Página de erro 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
