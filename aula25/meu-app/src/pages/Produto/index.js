import {useParams} from "react-router-dom";
import caldo1 from "./caldo1.jpg";
import caldo2 from "./caldo2.jpg";
import caldo3 from "./caldo3.jpg";
import caldo4 from "./caldo4.jpg";
import caldo5 from "./caldo5.jpg";

export default function Produto () {
    let params = useParams();

    return (
        <section>
            Pagina do produto {params.id}

            <br/>

            <img src={caldo4} width="40%"/>

            <div>
                <img src={caldo1} width="100px"/>
                <img src={caldo2} width="100px"/>
                <img src={caldo3} width="100px"/>
                <img src={caldo4} width="100px"/>
                <img src={caldo5} width="100px"/>
            </div>
        </section>
    )
}