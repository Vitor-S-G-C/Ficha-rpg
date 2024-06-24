
document.getElementById('rpg').addEventListener('submit', function (event) {
    event.preventDefault(); // Não deixa enviar a ficha com raças e classes invalidas

    var racaSelecionada = document.getElementById('raca').value;
    var classeSelecionada = document.getElementById('classe').value;
    var sexoSelecionado = document.getElementById('sexo').value;
    var bagSelecionada = document.getElementById('bag').value

    //combinações permitidas
    var classesPermitidas = {
        humano: ['amazona', "alquimista", "assassino", "clerigo", "bruxo", "defensor", "feiticeiro", "invocador", "ladino", "mago", "monge", "necromante", "paladino", "pistoleiro", "ranger"],
        anao: ['amazona', 'alquimista', 'barbaro', 'clerigo', 'defensor', 'guerreiro', 'paladino', 'pistoleiro'],
        orc: ['assassino', 'barbaro', 'guerreiro', 'paladino', 'bruxo', 'ranger'],
        elfo: ['amazona', 'assassino', 'druida', 'feiticeiro', 'guerreiro', 'invocador', 'mago', 'pistoleiro'],
        sentinela: ['alquimista', 'barbaro', 'defensor', 'guerreiro', 'paladino'],
        dracha: ['barbaro', 'assassino', 'defensor', 'guerreiro', 'monge', 'necromante', 'ranger'],
        tiefling: ['assassino', 'bruxo', 'defensor', 'feiticeiro', 'mago', 'necromante', 'pistoleiro'],
        undine: ['amazona', 'feiticeiro', 'invocador', 'mago', 'monge', 'paladino'],
        valkyre: ['amazona', 'barbaro', 'guerreiro', 'monge', 'paladino', 'pistoleiro'],
        ifrit: ['alquimista', 'assassino', 'defensor', 'feiticeiro', 'guerreiro', 'monge', 'pistoleiro']
    };
    var sexoPermitido = {
        M: ["alquimista", "assassino", "barbaro", "bruxo", "clerigo", "defensor",
            "druida", "feiticeiro", "invocador", "ladino", "mago", "monge",
            "necromante", "paladino", "pistoleiro", "ranger"],
        F: ['amazona', "alquimista", "assassino", "barbaro", "bruxo", "clerigo",
            "defensor", "druida", "feiticeiro", "invocador", "ladino", "mago",
            "monge", "necromante", "paladino", "pistoleiro", "ranger"]
    }

    // Script de combinações
    if (racaSelecionada in classesPermitidas) {
        if (classesPermitidas[racaSelecionada].includes(classeSelecionada)) {
            if (sexopermitido[sexoSelecionado].includes(classeSelecionada)) {
                // Oque vai aparecer se a combinação for invalida
                this.submit();
            } else {
                alert('Apenas mulheres podem ser amazonas.');
            }
        } else {
            alert('Combinação inválida de raça e classe selecionadas. Escolha outra classe.');
        }
    } else {
        alert('Raça selecionada não é válida. Escolha outra raça.');
    }
});
