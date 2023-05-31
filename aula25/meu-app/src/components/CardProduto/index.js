import {useNavigate} from "react-router-dom";

export default function CardProduto(props) {
    const navigate = useNavigate();

    return (
        <div className="col">
            <div onClick={() => navigate('/produto/'+props.id)} className="card card-body card-product">
                {props.nome}
            </div>
        </div>
    )
}