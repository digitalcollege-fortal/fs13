function Button(props) {
    return (
        <button className={"btn btn-" + props.cor}>{props.children}</button>
    )
}

// versao desestruturada
// function Button({cor, children}) {
//     return (
//         <button className={"btn btn-" + cor}>{children}</button>
//     )
// }

export default function Perfil() {
    return (
        <div>
            Pagina de Perfil

            <br/>

            <Button cor="primary">Cadastrar</Button>
            <Button cor="danger">Listar</Button>
            <Button cor="dark">Excluir</Button>
            <Button cor="success">Relatorios</Button>
        </div>
    )
}