// Pega a Data Atual
var data = new Date()
var dia = data.getDate()
var mes = data.getMonth() + 1
var ano = data.getFullYear()
//var dataAtual = dia + '/' + mes + '/' + ano
var dataAtual = ano + '-' + mes + '-' + dia


// Pega o campo de texto
var texto = window.document.getElementById('verificou')

//Pega o campo de imagem
var img = window.document.getElementById('img')

function verifica() {

    // Pega o sexo que usuário escolheu
    var sexo = window.document.querySelector('input[name="sexo"]:checked')
    
    // Pega a Data que usuário digitou
    var dataDigitada = window.document.getElementById("ano")
    var teste = dataDigitada.value

    var ano = calcularIdade(teste)

    if(sexo.value == 'Homem') {
        if(ano > 50 ){
            img.src = '_fotos/foto-idoso-m.png'
        } else if (ano > 30 && ano <= 50 ) {
            img.src = '_fotos/foto-adulto-m.png'
            
        }else if(ano >= 10 && ano <= 30) {
            img.src = '_fotos/foto-jovem-m.png'
        } else {
            img.src = '_fotos/foto-bebe-m.png'
        }
    } else if(sexo.value == 'Mulher') {
        if(ano > 50 ){
            img.src = '_fotos/foto-idoso-f.png'
        } else if (ano > 30 && ano <= 50 ) {
            img.src = '_fotos/foto-adulto-f.png'
        }else if(ano >= 10 && ano <= 30) {
            img.src = '_fotos/foto-jovem-f.png'
        } else {
            img.src = '_fotos/foto-bebe-f.png'
        }
   }
    texto.innerHTML = `Detectamos ${sexo.value} com ${ano} anos!`
    
}

function calcularIdade(dataDigitada) {

    var a = dataDigitada
    var anoDigitado = a.substr(0, 4)
    var mesDigitado = a.substr(5,7)
    var diaDigitado = a.substr(8,10)

    var b = dataAtual
    var anoAtual = b.substr(0, 4)
    var mesAtual = b.substr(5,7)
    var diaAtual = b.substr(8,10)
    

    if( (anoDigitado - anoAtual) >= 0) {
        return (anoDigitado - anoAtual)
    } else {
        return (anoAtual - anoDigitado)
    }

}