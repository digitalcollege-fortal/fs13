import {useNavigate} from "react-router-dom";
import "./styles.css";

export default function Produtos() {
    const navigate = useNavigate();

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
                <div className="col">
                    <div onClick={() => navigate('/produto/'+cada.id)} className="card card-body card-product">
                        {cada.nome}
                    </div>
                </div>
            ))}
        </section>
    )
}