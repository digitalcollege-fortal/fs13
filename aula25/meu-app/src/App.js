import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Listar from "./pages/Listar";
import Perfil from "./pages/Perfil";
import Menu from "./components/Menu";

import "bootstrap/dist/css/bootstrap.css";

export default function App() { 
  return (
    <BrowserRouter>
      <div className="container">
        <Menu/>

        <hr/>

        <Routes>
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/listar" element={<Listar/>} />
          <Route path="/perfil" element={<Perfil/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}