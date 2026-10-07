const taskinput = document.getElementById('taskinput');
const addtaskbtn = document.getElementById('addtaskBtn');
const tasklist = document.getElementById('tasklist');

// Função para adicionar a tarefa
function addTask() {
    const taskText = taskinput.value.trim();

    if (taskText === '') {
        alert("digite alguma tarefa antes de adicionar");
        return;
    }

    // Cria o elemento <li>
    const li = document.createElement('li');

   // Cria um span só para o texto da tarefa
   const span = document.createElement('span');
    span.textContent = taskText;

    // Clica no texto para marcar como concluído
    span.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    // Cria o botão de deletar (lixeira)
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete-btn');

    // Ao clicar na lixeira, removemos a tarefa
    deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita marcar como concluída ao apagar
        li.remove();
    });

    // Junta o botão de deletar dentro do item da lista
    // ORDEM IMPORTANTE: Coloca o texto (span) e depois a lixeira dentro do <li>
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Adiciona o item na lista principal na tela
    tasklist.appendChild(li);

    // Limpa o campo de texto
    taskinput.value = '';
    taskinput.focus();
}

// Evento de clique no botão "Adicionar"
addtaskbtn.addEventListener('click', addTask);

// Evento de pressionar a tecla "Enter" no campo de texto      
taskinput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }   
});
