import React from "react";

export default function Formulario() {
  const [cep, setCep] = React.useState('');
  const [logradouro, setLogradouro] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const logradouroInput = React.createRef();
  const numeroInput = React.createRef();

  const alterarCep = (event) => {
    if (event.target.value === '88888888') {
      // alert('CEP invalido');
    }

    if (event.target.value.length === 8) {

      fetch(`https://viacep.com.br/ws/${event.target.value}/json`)
        .then(res => res.json())
        .then(endereco => {
          if (endereco.erro === true) {
            logradouroInput.current.focus();
            alert('CEP invalido');
            return;
          }

          setLogradouro(endereco.logradouro);
          setCidade(endereco.localidade);
          numeroInput.current.focus();
        });
    }
  };

  return (
    <div>
      <form>
        <input onChange={alterarCep} placeholder="CEP"/>

        <input value={logradouro} ref={logradouroInput} placeholder="Logradouro"/>

        <input value={cidade} placeholder="Cidade"/>

        <input ref={numeroInput} placeholder="Número"/>
        <br/>

        <button>Enviar</button>
      </form>
    </div>
  )
}
