function rolarD100() {
    return Math.floor(Math.random() * 100) + 1;
}

function rolarD20() {
    return Math.floor(Math.random() * 20) + 1;
}

function rolarD10() {
    return Math.floor(Math.random() * 10) + 1;
}

function rolarD8() {
    return Math.floor(Math.random() * 8) + 1;
}

function rolarD6() {
    return Math.floor(Math.random() * 6) + 1;
}

function rolarD4() {
    return Math.floor(Math.random() * 4) + 1 ;
}

document.addEventListener('DOMContentLoaded', function() {
    const dados = [
        {button: 'rolarD100Button', resultado: 'resultado100', rolar: rolarD100, modificador: 'modificadorD100'},
        {button: 'rolarD20Button', resultado: 'resultado20', rolar: rolarD20, modificador: 'modificadorD20'},
        {button: 'rolarD10Button', resultado: 'resultado10', rolar: rolarD10, modificador: 'modificadorD10'},
        {button: 'rolarD8Button', resultado: 'resultado8', rolar: rolarD8, modificador: 'modificadorD8'},
        {button: 'rolarD6Button', resultado: 'resultado6', rolar: rolarD6, modificador: 'modificadorD6'},
        {button: 'rolarD4Button', resultado: 'resultado4', rolar: rolarD4, modificador: 'modificadorD4'}
    ];

    dados.forEach(dado => {
        const button = document.getElementById(dado.button);
        const resultado = document.getElementById(dado.resultado);
        const modificador = document.getElementById(dado.modificador);

        button.addEventListener('click', function() {
            const valor = dado.rolar();
            const mod = parseInt(modificador.value) || 0;
            resultado.textContent = `Resultado: ${valor} + ${mod} = ${valor + mod}`;
        });
    });
});
