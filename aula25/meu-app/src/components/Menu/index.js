import {Link} from "react-router-dom";

export default function Menu() {
    return (
        <nav>
          <Link to="/cadastro">Cadastro</Link>
          <Link to="/listar">Listar</Link>
          <Link to="/perfil">Perfil</Link>
          <Link to="/produto">Produto</Link>
        </nav>
    )
}