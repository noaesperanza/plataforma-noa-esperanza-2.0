import { useState } from 'react'

export default function NoaChatPage() {
  const [mensagem, setMensagem] = useState('')
  const [resposta, setResposta] = useState('')

  const enviar = async () => {
    // Exemplo simulado – substituir por chamada à API
    setResposta(`Você disse: ${mensagem}`)
    setMensagem('')
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Interaja com a Nôa</h2>
      <textarea
        className="w-full p-2 border rounded mb-2"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Digite sua mensagem..."
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={enviar}
      >
        Enviar
      </button>
      {resposta && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <strong>Resposta:</strong>
          <p>{resposta}</p>
        </div>
      )}
    </div>
  )
}
