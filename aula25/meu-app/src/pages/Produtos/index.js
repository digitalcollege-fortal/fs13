import CardProduto from "../../components/CardProduto";
import "./styles.css";

export default function Produtos() {

    let produtos = [
        {
            id: 1,
            nome: 'Pizza'
        },
        {
            id: 2,
            nome: 'Pratinho'
        },
        {
            id: 3,
            nome: 'Espetinho de coração'
        },
        {
            id: 4,
            nome: 'Caldo de cana'
        }
    ];

    return (
        <section className="row">
            {produtos.map(cada => (
                <CardProduto id={cada.id} nome={cada.nome}/>
            ))}
        </section>
    )
}