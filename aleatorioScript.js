var botao = document.querySelector('#botao')

botao.addEventListener('click', sortear)

function sortear() {
    var inputMin = parseInt(document.querySelector('#inputMin').value)
    var inputMax = parseInt(document.querySelector('#inputMax').value)

    /* FIXME: Consertar o gerador de números pra que inclua o limite superior. */
    var valor = Math.floor(Math.random()*(inputMax - inputMin) + inputMin)
    
    console.log(valor)
}
