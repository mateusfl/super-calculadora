var botao = document.querySelector('#botao')
var resultado = document.querySelector('#resultado')

botao.addEventListener('click', sortear)

function sortear() {
    var inputMin = parseInt(document.querySelector('#inputMin').value)
    var inputMax = parseInt(document.querySelector('#inputMax').value)

    var valor = Math.floor(Math.random()*(inputMax + 1 - inputMin) + inputMin)

    resultado.innerHTML = `<p id="resultado">O valor sorteado foi: <b>${valor}</b></p>`
}
