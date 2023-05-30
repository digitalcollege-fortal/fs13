import {useParams} from "react-router-dom";

export default function Produto () {
    let params = useParams();

    return (
        <div>
            Pagina do produto {params.id}
        </div>
    )
}