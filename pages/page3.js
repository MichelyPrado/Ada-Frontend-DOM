document.addEventListener("DOMContentLoaded", function() {
    // Recuperar os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const quantidadeHomens = parseInt(urlParams.get('homens'));
    const quantidadeMulheres = parseInt(urlParams.get('mulheres'));
    const quantidadeCriancas = parseInt(urlParams.get('criancas'));

    // Calcular o total de convidados
    const totalConvidados = quantidadeHomens + quantidadeMulheres + quantidadeCriancas;

    // Atualizar o texto de total de convidados
    const totalGuestElement = document.getElementById("total-guest");
    totalGuestElement.textContent = `${totalConvidados} convidado(s)`;

    // Atualizar a quantidade de homens, mulheres e crianças
    const quantidadeHomensElement = document.getElementById("quantidade-homens");
    const quantidadeMulheresElement = document.getElementById("quantidade-mulheres");
    const quantidadeCriancasElement = document.getElementById("quantidade-criancas");

    quantidadeHomensElement.textContent = `${quantidadeHomens} Homens`;
    quantidadeMulheresElement.textContent = `${quantidadeMulheres} Mulheres`;
    quantidadeCriancasElement.textContent = `${quantidadeCriancas} Crianças`;

    // Calcular a quantidade de carne, pão de alho, carvão, sal, gelo, refrigerante e água
    const quantidadeCarne = (0.4 * quantidadeHomens) + (0.32 * quantidadeMulheres) + (0.20 * quantidadeCriancas);
    const quantidadePaoDeAlho = (2 * (quantidadeHomens + quantidadeMulheres)) + quantidadeCriancas;
    const quantidadeCarvao = totalConvidados;
    const quantidadeSal = 0.04 * totalConvidados;
    const quantidadeGelo = (totalConvidados >= 10) ? 5 : 0;
    const quantidadeRefrigerante = Math.ceil(totalConvidados / 5);
    const quantidadeAgua = Math.ceil(totalConvidados / 5);

    // Atualizar os resultados na tabela
    const resultadosElement = document.querySelector(".results");
    resultadosElement.children[0].children[1].textContent = `${quantidadeCarne.toFixed(3)} KG`;
    resultadosElement.children[1].children[1].textContent = `${quantidadePaoDeAlho} unidade(s)`;
    resultadosElement.children[2].children[1].textContent = `${quantidadeCarvao.toFixed(3)} KG`;
    resultadosElement.children[3].children[1].textContent = `${quantidadeSal.toFixed(3)} KG`;
    resultadosElement.children[4].children[1].textContent = `${quantidadeGelo} KG`;
    resultadosElement.children[5].children[1].textContent = `${quantidadeRefrigerante * 2000} ml`;
    resultadosElement.children[6].children[1].textContent = `${quantidadeAgua * 1000} ml`;

    // Selecionar o botão "Novo cálculo"
    const novoCalculoButton = document.querySelector(".default-button");

    // Adicionar um evento de clique ao botão
    novoCalculoButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Redireciona para a "page2.html" quando o botão é clicado
        window.location.href = "page2.html";
    });
});
