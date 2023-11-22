import "./css/styles.css";

function App() {
  return (
    <div>
      <header className="container">
        <img className="logo" src="nike-99.png" alt="Logo da Nike"/>
        <nav className="menu">
            <a title="Esta é a home" href="">HOME</a>
            <a title="Este é o sobre" href="">SOBRE</a>
            <a title="Este é o contato" href="contato.html">CONTATO</a>
            <a title="Este é a login" href="">LOGIN</a>
        </nav>

        <div>
         <input placeholder="Pesquise aqui" className="input" type="text"/>
         <button className="button">Buscar</button>
        </div>
        
    </header>
    </div>
  );
}

export default App;
