import React from "react";
import Produtos from "./components/Produtos";

export const CarrinhoContext = React.createContext();


export default function App() {
  const [quantidade, setQuantidade] = React.useState(0);

  const add = () => {
    setQuantidade(quantidade + 1);
  };

  return (
    <CarrinhoContext.Provider value={add}>
      <h2>Carrinho: {quantidade} itens</h2>

      <Produtos add={add}/>
    </CarrinhoContext.Provider>
  )
}