var botao = document.querySelector('#botao')
var resultado = document.querySelector('#resultado')
botao.addEventListener('click', sortear)

function sortear() {
    var inputMin = parseInt(document.querySelector('#inputMin').value)
    var inputMax = parseInt(document.querySelector('#inputMax').value)

    /* FIXME: Consertar o gerador de números pra que inclua o limite superior. */
    var valor = Math.floor(Math.random()*(inputMax - inputMin) + inputMin)

    resultado.innerHTML = `<p id="resultado">O valor sorteado foi: <b> \n ${valor} </b></p>`
}
