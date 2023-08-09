function remove(id) {
    fetch(`http://localhost:8000/disciplinas/${id}`, {
        method: 'DELETE'
    });

    location.href="";
}

function cadastrar() {
    event.preventDefault();

    fetch('http://localhost:8000/disciplinas', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nome: document.getElementById('nome').value,
            carga_horaria: document.getElementById('carga_horaria').value,
        })
    })
        .then(res => res.status)
        .then(status => {
            if (status > 299) {
                alert('dados invalidos');
                return;
            }

            alert('Ok');

            location.href="index.html";
        });

}


fetch('http://localhost:8000/disciplinas')
    .then(res => res.json())
    .then(dados => {
        dados.map(cada => {
            table_disciplinas.innerHTML += `
                <tr>
                    <td>${cada.id}</td>
                    <td>${cada.nome}</td>
                    <td>${cada.carga_horaria}</td>
                    <td>
                        <button onclick="remove(${cada.id})">Excluir</button>
                    </td>
                </tr>
            `;
        })
    });
