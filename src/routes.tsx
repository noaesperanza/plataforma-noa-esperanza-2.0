// src/routes.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoaChatPage from "./pages/NoaChatPage";
import DashboardPaciente from "./pages/DashboardPaciente";
import DashboardProfissional from "./pages/DashboardProfissional";
import AdminDashboard from "./pages/AdminDashboard";
import RelatorioNarrativo from "./pages/RelatorioNarrativo";
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
        <Route path="/profissional" element={<DashboardProfissional />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Relatório narrativo */}
        <Route path="/relatorio" element={<RelatorioNarrativo />} />

        {/* Página de erro 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
