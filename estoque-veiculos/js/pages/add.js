function save() {
    fetch('http://localhost:8000/carros', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            marca: marca.value,
            modelo: modelo.value,
            placa: placa.value,
            foto: foto.value
        })
    });

    alert('Novo carro adicionado');
}

function add() {
    return `
        <form onsubmit="save()">
            <label for="marca">Marca</label>
            <input id="marca" class="form-control mb-3">

            <label for="modelo">Modelo</label>
            <input id="modelo" class="form-control mb-3">
            
            <label for="placa">Placa</label>
            <input id="placa" class="form-control mb-3">
            
            <label for="foto">Foto</label>
            <input id="foto" class="form-control mb-3">

            <button class="btn btn-primary">Pronto</button>
        </form>
    `;
}