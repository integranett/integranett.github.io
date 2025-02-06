// script.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cliente = document.querySelector('#cliente').value;
    const local = document.querySelector('#local').value;
    const nome = document.querySelector('#nome').value;
    const descricao = document.querySelector('#descricao').value;
    const data = document.querySelector('#data').value;
    const valor = document.querySelector('#valor').value;

    const listaServicos = document.querySelector('#lista-servicos');

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="servico-info">
            <strong>${nome}</strong>
            <p>${descricao}</p>
            <div class="local-cliente">Cliente: ${cliente} | Local: ${local}</div>
            <div class="data">Data: ${data}</div>
        </div>
        <div class="valor">R$ ${parseFloat(valor).toFixed(2)}</div>
    `;

    listaServicos.appendChild(li);

    // Limpar o formulário
    document.querySelector('form').reset();
});
