// Declarando variáveis globais
let alunos = [];

// Evento disparado quando o DOM é carregado
document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar dados na tabela
    renderAlunos();

    // Elementos do modal novo cliente
    let btnNovoCliente = document.getElementById("btnNovoCliente");
    let modalNovoCliente = document.getElementById("modalNovoCliente");
    let spanNovoCliente = modalNovoCliente.querySelector(".close");

    // Configurando eventos do modal novo cliente
    btnNovoCliente.onclick = function () {
        modalNovoCliente.style.display = "block";
    };

    spanNovoCliente.onclick = function () {
        modalNovoCliente.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modalNovoCliente) {
            modalNovoCliente.style.display = "none";
        }
    };

    // Adicionando eventos aos botões da tabela
    let botoes = document.querySelectorAll('.btn-info');
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].onclick = function () {
            mostrarDetalhes(i);
        };
    }
});

// Função para exibir modal de informações do cliente
function mostrarDetalhes(index) {
    let aluno = alunos[index];

    let modal = document.getElementById("myModal");

    if (!modal) {
        console.error("Elemento 'myModal' não encontrado no DOM");
        return;
    }

    let span = modal.querySelector(".close");
    if (!span) {
        console.error("Elemento 'close' não encontrado no DOM");
        return;
    }

    // Elementos do modal de informações do cliente
    let MatriculaModal = modal.querySelector("#MatriculaModal");
    let EstudanteModal = modal.querySelector("#EstudanteModal");
    let comportamentoModal = modal.querySelector("#comportamentoModal");
    let conhecimentoModal = modal.querySelector("#conhecimentoModal");
    let PresencaModal = modal.querySelector("#PresencaModal");
    let QualidadeModal = modal.querySelector("#QualidadeDasEntregasModal");
    let btnExcluirCliente = modal.querySelector("#btnExcluirAluno");

    if (!MatriculaModal || !EstudanteModal || !comportamentoModal || !conhecimentoModal || !PresencaModal || !QualidadeDasEntregasModal || !btnExcluirAluno) {
        console.error("Elementos não encontrados no DOM");
        return;
    }

    // Preenchendo informações no modal
    MatriculaModal.innerText = aluno.Matricula;
    EstudanteModal.innerText = aluno.Estudante;
    comportamentoModal.innerText = aluno.comportamento;
    conhecimentoModal.innerText = aluno.conhecimento;
    PresencaModal.innerText = aluno.Presenca;
    QualidadeModal.innerText = aluno["Qualidade das entregas"];

    // Configurando o botão de excluir
    btnExcluirCliente.onclick = function () {
        excluirCliente(index);
        modal.style.display = "none";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    modal.style.display = "block";
}

// Função para excluir cliente
function excluirCliente(index) {
    alunos.splice(index, 1);
    atualizarLocalStorage();
    renderAlunos();
}

// Função para carregar dados na tabela
function renderAlunos() {
    let tbody = document.getElementById("alunos");
    tbody.innerHTML = ""; // Clear previous entries

    // Assume que `alunos` é uma variável global ou vem de alguma fonte externa
    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];

        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${aluno.Matricula}</td>
            <td>${aluno.Estudante}</td>
            <td>${aluno.comportamento}</td>
            <td>${aluno.conhecimento}</td>
            <td>${aluno.Presenca}</td>
            <td>${aluno["Qualidade das entregas"]}</td>
            <td>
                <button class="btn-info" onclick="mostrarDetalhes(${i})">Mais info</button>
            </td>
        `;

        tbody.appendChild(tr);
    }
}

// Função para cadastrar novo cliente
function cadastrarCliente() {
    let Matricula = document.getElementById("Matrícula").value;
    let Estudante = document.getElementById("Estudante").value;
    let comportamento = document.getElementById("comportamento").value;
    let conhecimento = document.getElementById("conhecimento").value;
    let Presenca = document.getElementById("Presença").value;
    let Qualidade = document.getElementById("Qualidade das entregas").value;
    
    // Verifica se a Matricula já está cadastrada
    if (alunoExistente(Matricula)) {
        alert("Matricula já cadastrada. Insira uma matricula única.");
        return;
    }

    let novoAluno = {
        Matricula: Matricula,
        Estudante: Estudante,
        comportamento: comportamento,
        conhecimento: conhecimento,
        Presenca: Presenca,
        "Qualidade das entregas": Qualidade
    };

    alunos.push(novoAluno);

    // Salva no localStorage
    atualizarLocalStorage();

    // Recarrega a tabela após cadastrar um novo aluno
    renderAlunos();

    // Esconde o modal de novo aluno
    document.getElementById("modalNovoCliente").style.display = "none";
}

// Função para verificar se o aluno já existe
function alunoExistente(Matricula) {
    return alunos.some(aluno => aluno.Matricula === Matricula);
}

// Função para atualizar o localStorage com os dados dos alunos
function atualizarLocalStorage() {
    localStorage.setItem("alunos", JSON.stringify(alunos));
}