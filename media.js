var botao = document.querySelector('#botao')
    botao.addEventListener('click', calcular)
    
    var botaoAdicionar = document.querySelector('#adicionar')
    botaoAdicionar.addEventListener('click', adicionaNumero)
    
    var botaoRemover = document.querySelector('#remover')
    botaoRemover.addEventListener('click', retiraNumero)

    var caixaResultado = document.querySelector('#resultado')

    function adicionaNumero(){
        var novoInput = document.createElement('input')
        novoInput.className = 'numeros'
        novoInput.type = 'number'
        document.querySelector('.inputs').appendChild(novoInput)
    }
    function retiraNumero(){
        if(document.querySelectorAll('.numeros').length > 2){
            document.querySelector('.inputs').removeChild(document.querySelector('.inputs').lastChild)
        }
        else{
        }
    }

    function calcular(){
        /* cria um array com o tamanho da quantidade de inputs e preenche com undefined */
        var numeros = new Array(document.querySelectorAll('.numeros').length).fill()
        var media = 0

        /* coleta o valor do array de classes numeros, na posição i, transforma em real e guarda no array numeros */
        for (let i = 0; i < numeros.length; i++) {
            numeros[i] = parseFloat(document.querySelectorAll('.numeros')[i].value) 
            media += numeros[i]
        }

        media = media / numeros.length

        if(Number.isNaN(media) == true){
            caixaResultado.innerHTML = `<p id="resultado">Erro. Preencha todos os campos.</p>`
        }
        else if(Number.isInteger(media) == true){
            caixaResultado.innerHTML = `<p id="resultado">O resultado é: <b>${media}</b></p>`
        }
        else{
            caixaResultado.innerHTML = `<p id="resultado">O resultado é: <b>${media.toFixed(3)}</b></p>`
        }
    }
