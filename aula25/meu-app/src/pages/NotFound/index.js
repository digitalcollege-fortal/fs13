import imagem from "./404.svg";

export default function NotFound() {
    return (
        <div>
            <p>Pagina nao encontrada</p>

            <img src={imagem} width="50%"/>   
        </div>
    )
}