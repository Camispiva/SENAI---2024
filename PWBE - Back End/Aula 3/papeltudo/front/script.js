//Variáveis e constantes(objetos) globais
// const msgs = document.getElementById('msgs');
const criar = document.getElementById('criar');
const dados = document.getElementById('dados');
const uri = 'http://localhost:3000/papelaria';
const items = [];

//Obter dados do back-end
function loadItems() {
    fetch(uri)
        .then(res => res.json())
        .then(res => {
            items.push(...res);
            preencherTabela();
        });
}   

//CRUD - Read - Renderizar os dados obtidos em uma tabela
function preencherTabela() {

    items.forEach(papelaria => {
        dados.innerHTML += `
                <tr>
                    <td>${papelaria.id}</td>
                    <td>${papelaria.nome}</td>
                    <td>${papelaria.descricao}</td>
                    <td>${papelaria.valor}</td>
                    <td>
                        <button onclick="del(${papelaria.id})"> - </button>
                        <button onclick="edit(this)"> * </button>
                    </td>
                </tr>
            `;
    });
}

//CRUD - Create
criar.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        id: criar.id.value,
        nome: criar.nome.value,
        descricao: criar.descricao.value,
        valor: criar.valor.value
    }
    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            if (res.sqlMessage == undefined) {
                items.push(data);
                dados.innerHTML = "";
                preencherTabela();
                criar.reset();
            } else {
                // mensagens(res.sqlMessage, 'Erro ao cadastrar item!');
            }
        });
});

//CRUD - Update
function update(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    let id = celulas[0].innerHTML;
    let valor = {
        nome: celulas[1].innerHTML,
        descricao: celulas[2].innerHTML,
        valor: celulas[3].innerHTML
    };
    fetch(uri + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            if (res.sqlMessage == undefined) {
                celulas[1].removeAttribute('contenteditable');
                celulas[2].removeAttribute('contenteditable');
                celulas[3].removeAttribute('contenteditable');
                btn.innerHTML = '*';
                btn.setAttribute('onclick', 'edit(this)');
            } else {
                // mensagens(res.sqlMessage, 'Erro ao atualizar item!');
            }
        });
}

//CRUD - Delete
function del(id) {
    mensagens('Deseja realmente excluir o item id = ' + id + '?', 'Excluir item', id);
}

//Confirma exclusão
function confirmar(id) {
    fetch(uri + '/' + id, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(res => {
            window.location.reload();
        });
}

//Tornar as células da linha tabela editáveis
function edit(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    for (let i = 1; i < celulas.length - 2; i++) {
        celulas[i].setAttribute('contenteditable', 'true');
    }
    btn.innerHTML = '✔';
    btn.setAttribute('onclick', 'update(this)');
}

//Mostrar mensagens do sistema em um modal
// function mensagens(msg, titulo, confirma) {
//     msgs.classList.remove('oculto');
//     document.querySelector('#errTit').innerHTML = titulo;
//     document.querySelector('#msg').innerHTML = msg;
//     if (confirma != undefined) {
//         document.querySelector('#confirma').classList.remove('oculto');
//         document.querySelector('#confirma').setAttribute("onclick", confirmar(confirma));
//     }
// }
