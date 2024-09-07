function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    // Obtém a seção onde os resultados da pesquisa serão exibidos.

    let campoDePesquisa = document.getElementById("campo-de-pesquisa").value;
    // Captura o valor digitado pelo usuário no campo de pesquisa.

    if (!campoDePesquisa) {
        // Verifica se o campo de pesquisa está vazio.
        section.innerHTML = "<p>Desculpe, parece que os gremilins de I.A. estão nos trolando, tente novamente!</p>";
        // Exibe uma mensagem de erro se o campo estiver vazio.
        return;
    }

    campoDePesquisa = campoDePesquisa.toLowerCase();
    // Converte o texto digitado para minúsculas, facilitando a comparação com os dados.

    let resultados = "";
    // Variável que armazenará os resultados da pesquisa.

    let titulo = ""; 
    let descricao = "";
    // Variáveis temporárias para armazenar os valores do título e da descrição dos dados durante a iteração.

    for (let dado of dados) {
        // Itera sobre a lista de dados disponíveis para verificar se algum item corresponde à pesquisa.

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        // Converte os títulos e descrições dos dados para minúsculas para comparação.

        if (titulo.includes(campoDePesquisa) || descricao.includes(campoDePesquisa)) {
            // Verifica se o campo de pesquisa aparece no título ou na descrição.

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.exemplo}</p>
            </div>
            `;
            // Se houver correspondência, cria um bloco HTML com os resultados, contendo título, descrição e exemplo.
        }
    }

    if (!resultados) {
        // Se não houver resultados, exibe uma mensagem informando que nada foi encontrado.
        resultados = "<p>Nada foi encontrado</p>";
    }

    section.innerHTML = resultados;
    // Insere os resultados (ou a mensagem de erro) na seção de resultados da pesquisa.
}

// Adiciona o evento para acionar a função de pesquisa quando o Enter for pressionado
document.getElementById("campo-de-pesquisa").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Verifica se a tecla pressionada foi a tecla Enter.
        event.preventDefault();
        // Previne o comportamento padrão do Enter (como o envio de formulário).
        pesquisar();
        // Chama a função pesquisar para realizar a busca.
    }
});
