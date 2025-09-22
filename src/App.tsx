import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NoaChatPage from "./pages/NoaChatPage"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noa" element={<NoaChatPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
