import React from "react";

export default function Listar() {
    const [quantidade, setQuantidade] = React.useState(1);
    

    const remove = () => {
        if (quantidade === 1) {
            return;
        }
        
        setQuantidade(quantidade - 1);
    }

    const add = () => {
        setQuantidade(quantidade + 1);
    }

    return (
        <div>
            Pagina de Listar

            <hr/>

            <p>Pizza de Calabrisa</p>
            <button onClick={remove} className="btn btn-outline-danger me-2">-</button>
            {quantidade}
            <button onClick={add} className="btn btn-outline-danger ms-2">+</button>

            <p className="mt-3">Total: R$ {42 * quantidade},00</p>
        </div>
    )
}