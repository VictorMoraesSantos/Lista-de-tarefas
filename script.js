const form = document.querySelector('#form');
const button = document.querySelector('#botao');
const tarefas = document.querySelector('.tarefas');

function removerInput(event) {
  event.target.parentElement.remove();
}

function botaoRemover() {
  const removerBotao = document.createElement('button');
  removerBotao.textContent = 'Remover';
  removerBotao.addEventListener('click', removerInput);
  return removerBotao;
}

function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector('#tarefa').value;
  if (input === '') {
    alert('Por favor, digite uma tarefa válida.');
  } else {
    const el = document.createElement('li');
    el.textContent = input;
    const botao = botaoRemover();
    el.appendChild(botao);
    tarefas.appendChild(el);
    document.querySelector('#tarefa').value = '';
  }
}

button.addEventListener('click', handleSubmit);
