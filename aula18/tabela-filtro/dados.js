let bebidas = [
    {
        id: 1,
        nome: 'Coca Cola',
        descricao: 'KS 390ml',
        quantidade: 12,
        foto: 'https://w7.pngwing.com/pngs/574/913/png-transparent-coca-cola-coca-cola-bottle-glass-bottles.png'
    },
    {
        id: 2,
        nome: 'Ypioca',
        descricao: 'Prata 960ml',
        quantidade: 24,
        foto: 'https://www.redesuperbom.com.br/uploads/produtos/59987_barcelos_aguardente_cachaca-ypioca-965ml-prata-mestre.jpg'
    },
    {
        id: 3,
        nome: 'Vodka Slova',
        descricao: 'Garrafa 1Lt',
        quantidade: 6,
        foto: 'https://images.tcdn.com.br/img/img_prod/791033/vodka_peteca_tradicional_slova_470ml_6891_1_0e2b628987f60a3e2e97469158365d0e.jpg'
    },
    {
        id: 4,
        nome: 'Vinho São Braz',
        descricao: 'O vinho do santo forte, garrafão 5L',
        quantidade: 18,
        foto: 'https://images.tcdn.com.br/img/img_prod/791033/vodka_peteca_tradicional_slova_470ml_6891_1_0e2b628987f60a3e2e97469158365d0e.jpg'
    },
    {
        id: 5,
        nome: 'Sapupara',
        descricao: 'Celular 450ml',
        quantidade: 20,
        foto: 'https://http2.mlstatic.com/D_NQ_NP_860986-MLB46927960553_072021-O.jpg'
    },
    {
        id: 6,
        nome: 'Cachaça Caranguejo',
        descricao: 'Picthulinha',
        quantidade: 12,
        foto: 'https://cdn.awsli.com.br/600x450/1958/1958204/produto/203200457/screenshot_20221124-215601_chrome-ufiigo.jpg'
    },
    {
        id: 7,
        nome: 'Kaiser',
        descricao: 'Lata 395ml',
        quantidade: 12,
        foto: 'https://images.squarespace-cdn.com/content/v1/51ef2bf2e4b02bcf8471333b/1568750468075-OUNPX34ZYYVSJ92VDNQW/kaiser.jpg'
    },
    {
        id: 8,
        nome: 'Vinho Vale Real',
        descricao: 'Garrafa 900ml',
        quantidade: 12,
        foto: 'https://us-southeast-1.linodeobjects.com/storage/evandro/media/uploads/produto/beb_vinho_coquetel_compo_vale_real_900ml_e5c786f2-3fab-477e-a23b-7bc6315a58ba.jpeg'
    },
    {
        id: 9,
        nome: 'Guaraná Wilson',
        descricao: 'Garrafa 2L',
        quantidade: 6,
        foto: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3118939:1628126231/guarana-Wilson.jpg?f=default&$p$f=28c8729'
    },
    {
        id: 10,
        nome: 'Skol',
        descricao: 'Roberto Claudio',
        quantidade: 24,
        foto: 'https://cdn.awsli.com.br/600x450/1958/1958204/produto/203200457/screenshot_20221124-215601_chrome-ufiigo.jpg'
    },
    {
        id: 11,
        nome: 'Colonial',
        descricao: 'Garrafa 960ml',
        quantidade: 20,
        foto: 'https://rum.cz/data/labels/br/img/br_297.jpg'
    },
    {
        id: 12,
        nome: 'Rum Montila',
        descricao: 'Garrafa 900ml',
        quantidade: 24,
        foto: 'https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/166.jpg'
    },
];

function abrirModal(foto, nome) {
    modalFotoConteudo.innerHTML = `<img width="100%" src="${foto}">`;
    modalTitulo.innerHTML = nome;
}

function atualizarTabela(lista) {
    lista.map((cada) => {
        document.getElementById('tabela-dados').innerHTML += `
            <tr>
                <td>${cada.id}</td>
                <td>${cada.nome}</td>
                <td>${cada.descricao}</td>
                <td>${cada.quantidade}</td>
                <td>
                    <a onclick="abrirModal('${cada.foto}', '${cada.nome}')" href="#" data-bs-toggle="modal" data-bs-target="#modalFoto">
                        <img src="${cada.foto}" width="50px">
                    </a>
                </td>
                <td>
                    <button class="btn btn-ou ztline-warning btn-sm">Editar</button>
                    <button class="btn btn-outline-danger btn-sm">Excluir</button>
                </td>
            </tr>
        `;
    });
}

atualizarTabela(bebidas);