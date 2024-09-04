// Array de objetos com as profissões e suas descrições
const profissoes = [
    { nome: 'Programador', descricao: 'Desenha, escreve, testa e mantém o código de software.', exemplo: 'A I.A. está transformando a forma como os programadores trabalham, tornando o processo de desenvolvimento de software mais eficiente e produtivo. Ao automatizar tarefas repetitivas e fornecer insights valiosos, a IA permite que os programadores se concentrem em tarefas mais criativas e estratégicas.' },
    { nome: 'Veterinário', descricao: 'Cuida da saúde de animais.', exemplo: 'A IA pode auxiliar no diagnóstico de doenças em animais, analisando imagens médicas e dados genéticos. Além disso, a IA pode ser utilizada para desenvolver novos tratamentos e medicamentos veterinários. A telemedicina veterinária, possibilitada pela IA, permite que os veterinários atendam animais remotamente, aumentando o acesso aos cuidados veterinários.' },
    { nome: 'Eletricista', descricao: 'Instala, mantém e repara sistemas elétricos.', exemplo: 'A IA pode otimizar a instalação e manutenção de sistemas elétricos, através da análise de dados e da identificação de possíveis problemas. Robôs e drones equipados com IA podem realizar inspeções em locais de difícil acesso, aumentando a segurança dos eletricistas.' },
    { nome: 'Designer', descricao: 'Cria projetos visuais para diversas mídias.', exemplo: 'No design, a IA está sendo utilizada para gerar ideias criativas, otimizar imagens e personalizar designs. Ferramentas de design assistido por IA podem gerar diversas opções de design em poucos segundos, permitindo que os designers se concentrem em aspectos mais estratégicos do projeto.' },
    { nome: 'Arquiteto', descricao: 'Projeta e constrói edifícios e espaços.', exemplo: 'A IA pode auxiliar na criação de projetos arquitetônicos mais eficientes e sustentáveis, através de simulações e análises de dados. Softwares de design assistido por IA podem gerar diversas opções de layout e design, acelerando o processo criativo. Além disso, a IA pode ser utilizada para analisar o impacto ambiental de diferentes projetos.' },
    { nome: 'Médico', descricao: 'Diagnostica, trata e previne doenças.', exemplo: 'A IA está sendo aplicada em diversos campos da saúde, desde o diagnóstico de doenças até o desenvolvimento de novos tratamentos. Por exemplo, a IA pode analisar imagens médicas para identificar tumores com maior precisão e eficiência. Além disso, a IA está sendo utilizada para desenvolver medicamentos personalizados e criar planos de tratamento mais eficazes.' },
    { nome: 'Motorista', descricao: 'Conduz veículos para transportar pessoas ou cargas.', exemplo: 'A automação de veículos, impulsionada pela IA, está transformando a indústria automotiva. Carros autônomos podem reduzir acidentes de trânsito e congestionamentos, mas também podem levar à diminuição da necessidade de motoristas humanos. No entanto, a IA também pode criar novas oportunidades de emprego, como engenheiros de sistemas autônomos e técnicos de manutenção.' },
    { nome: 'Professor', descricao: 'Transmite conhecimento e habilidades para alunos.', exemplo: 'A IA pode personalizar a aprendizagem, adaptando o conteúdo e o ritmo de ensino às necessidades de cada aluno. Plataformas de educação online com inteligência artificial podem oferecer tutoriais personalizados e feedbacks instantâneos. No entanto, o papel do professor como mentor e facilitador da aprendizagem continua sendo fundamental.' }
];

// Função para renderizar a lista de profissões na tela
function renderizarProfissoes(lista) {
    const resultadosContainer = document.getElementById('resultados-pesquisa');
    resultadosContainer.innerHTML = ''; // Limpa os resultados anteriores

    lista.forEach(profissao => {
        const item = document.createElement('div');
        item.classList.add('item-resultado');
        
        item.innerHTML = `
            <h2><a href="#" target="_blank">${profissao.nome}</a></h2>
            <p class="descricao-meta">${profissao.descricao}</p>
            <p class="exemplo-meta">${profissao.exemplo}</p>
        `;
        
        resultadosContainer.appendChild(item);
    });
}

// Função para pesquisar profissões
function pesquisarProfissao() {
    const input = document.getElementById('search-input');
    const termo = input.value.toLowerCase();

    const resultadosFiltrados = profissoes.filter(profissao => 
        profissao.nome.toLowerCase().includes(termo) || 
        profissao.descricao.toLowerCase().includes(termo)
    );

    renderizarProfissoes(resultadosFiltrados);
}

/// Função para adicionar uma nova profissão
function adicionarProfissao() {
    const nome = document.getElementById('new-profession-name').value.trim();
    const descricao = document.getElementById('new-profession-desc').value.trim();
    const exemplo = document.getElementById('new-profession-example').value.trim();

    if (nome && descricao && exemplo) {
        profissoes.push({ nome, descricao, exemplo });
        renderizarProfissoes(profissoes); // Atualiza a lista
        document.getElementById('new-profession-name').value = '';
        document.getElementById('new-profession-desc').value = '';
        document.getElementById('new-profession-example').value = '';
    } else {
        alert('Por favor, preencha todos os campos antes de adicionar.');
    }
}

// Adiciona o evento de clique ao botão de pesquisa
document.getElementById('search-button').addEventListener('click', pesquisarProfissao);

// Adiciona o evento de clique ao botão de adicionar profissão
document.getElementById('add-profession-button').addEventListener('click', adicionarProfissao);

// Renderiza as profissões iniciais ao carregar a página
renderizarProfissoes(profissoes);
