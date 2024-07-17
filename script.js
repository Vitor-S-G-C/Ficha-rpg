// script.js
document.getElementById('rpg').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Coleta os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const sexo = document.getElementById('sexo').value;
    const raca = document.getElementById('raca').value;
    const classe = document.getElementById('classe').value;
    const forca = document.getElementById('forca').value;
    const destreza = document.getElementById('destreza').value;
    const intelecto = document.getElementById('intelecto').value;
    const carisma = document.getElementById('carisma').value;
    const fe = document.getElementById('fe').value;
    const vigor = document.getElementById('vigor').value;
    const profissao = document.getElementById('profissao').value;
    const skill = document.getElementById('skill').value;
    const truques = document.getElementById('truques').value;
    
    // Monta a URL para enviar os dados para ficha.html
    const urlParams = new URLSearchParams();
    urlParams.append('nome', nome);
    urlParams.append('sexo', sexo);
    urlParams.append('raca', raca);
    urlParams.append('classe', classe);
    urlParams.append('forca', forca);
    urlParams.append('destreza', destreza);
    urlParams.append('intelecto', intelecto);
    urlParams.append('carisma', carisma);
    urlParams.append('fe', fe);
    urlParams.append('vigor', vigor);
    urlParams.append('profissao', profissao);
    urlParams.append('skill', skill);
    urlParams.append('truques', truques);
    
    // Exemplo de como usar os parâmetros em uma URL
    const url = `ficha.html?${urlParams.toString()}`;
    console.log(url);
    
    // Redireciona para ficha.html com os parâmetros
    window.location.href = `ficha.html?${urlParams.toString()}`;
});
