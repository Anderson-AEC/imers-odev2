
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoDePesquisa = document.getElementById("campo-de-pesquisa").value;

    if (!campoDePesquisa) {
        section.innerHTML = "<p>Desculpe, parece que os gremilins de I.A. estão nos trolando, tente novamente!</p>";
        return;
    }

    campoDePesquisa = campoDePesquisa.toLowerCase();
    let resultados = "";
    let titulo = ""; 
    let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        if (titulo.includes(campoDePesquisa) || descricao.includes(campoDePesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.exemplo}</p>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    section.innerHTML = resultados;
}

// Adiciona o evento para acionar a função de pesquisa quando o Enter for pressionado
document.getElementById("campo-de-pesquisa").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        pesquisar();
    }
});
