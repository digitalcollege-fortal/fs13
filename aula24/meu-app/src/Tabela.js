import "bootstrap/dist/css/bootstrap.css";

export default function Tabela() {
    return (
        <div>
            Lista de Produtos

            <button className="btn btn-primary">
                Teste
            </button>

            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
