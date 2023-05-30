function Button(props) {
    return (
        <button className="btn btn-danger">{props.texto}</button>
    )
}

export default function Perfil() {
    return (
        <div>
            Pagina de Perfil

            <br/>

            <Button cor="primary" texto="Cadastrar"/>
            <Button cor="danger" texto="Listar"/>
            <Button cor="dark" texto="Excluir"/>
        </div>
    )
}