const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
})