function adicionarTarefa() {
  let tarefa = document.getElementById("tarefa").value;

  if (tarefa === "") {
    alert("Adicione uma tarefa");
    return;
  }

  let lista = document.getElementById("lista");

  lista.innerHTML =
    lista.innerHTML +
    `
    <li>
     <input class="marcar-concluida" type="checkbox">
      <span class="texto">${tarefa}</span> 
      <button class="botao-deletar" onclick="remover(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-x-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708"/>
</svg></button>
      <button class="botao-atualizar" onclick="atualizar(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg></button>
    </li>`;


    document.getElementById("tarefa").value = ''
}

function remover(button) {
  const li = button.parentElement;
  lista.removeChild(li);
}

function atualizar(button) {
    const li = button.parentElement;
    const span = li.querySelector("span");
    const nova = prompt("Editar tarefa:", span.textContent);
    if (nova !== null && nova.trim() !== "") {
        span.textContent = nova.trim();
    }
}
