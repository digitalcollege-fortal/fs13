import "./teste.css";

import Tabela from "./Tabela";
import Lista from "./Lista";

export default function App() {
  let nome = "Chiquim";
  let cidade = "Caucaia";

  return (
    <div>
      Ola mundo

      <hr/>

      <Tabela/>

      <p className="vermelho">Texto qualquer</p>

      <p>Me chamo {nome} e sou da {cidade}</p>

      <Lista/>
      <Lista/>
      <Lista/> 
    </div>
  );
}

//export default App;
