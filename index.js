// Pega a Data Atual
var data = new Date()
var dia = data.getDate()
var mes = data.getMonth() + 1
var ano = data.getFullYear()
var dataAtual = dia + '/' + mes + '/' + ano



// Pega o campo de texto
var texto = window.document.getElementById('verificou')
//console.log(texto.innerText)

function verifica() {

    // Pega o sexo que usuário escolheu
    var sexo = window.document.querySelector('input[name="sexo"]:checked')
    //console.log(sexo.value)

    
    // Pega a Data que usuário digitou
    var dataDigitada = window.document.getElementById("ano")
    //ano - dataDigitada.value
    console.log(dataDigitada.year)
    //var dataPessoa = dataAtual - dataDigitada
    //console.log(dataPessoa)

    //texto.innerHTML = `Detectamos ${sexo.value} com ${idade} anos!`
}