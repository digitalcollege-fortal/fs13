import React from "react";

export default function Cadastro() {
    const [nome, setNome] = React.useState('');

    const alterarNome = (event) => {
        setNome(event.target.value);
    }

    const enviar = () => {
        fetch('', {
            body: JSON.stringify({
                name: nome
            })
        })
    }

    return (
        <div>
            Pagina de Cadastro do {nome}
            <br/>

            <input onChange={alterarNome} value={nome}/>

            <button onClick={enviar}>Enviar</button>
        </div>
    )
}