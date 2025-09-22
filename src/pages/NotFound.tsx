import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="text-center mt-32">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg mb-4">Página não encontrada</p>
      <Link to="/" className="text-blue-600 underline">
        Voltar à Página Inicial
      </Link>
    </div>
  )
}
