// Pega a Data Atual
var data = new Date()
var dia = data.getDate()
var mes = data.getMonth() + 1
var ano = data.getFullYear()
//var dataAtual = dia + '/' + mes + '/' + ano
var dataAtual = ano + '-' + mes + '-' + dia

var res = window.document.querySelector('div#verificou')

// Pega o campo de texto
var texto = window.document.getElementById('verificou')

//Pega o campo de imagem
var img = window.document.getElementById('img')
// var img = window.document.createElement('img') // cria a tag img dinamicamente
// img.setAttribute('id', 'foto')

function verifica() {

    // Pega o sexo que usuário escolheu
    var sexo = window.document.querySelector('input[name="sexo"]:checked')
    
    // Pega a Data que usuário digitou
    var dataDigitada = window.document.getElementById("ano")
    var teste = dataDigitada.value

    var ano = calcularIdade(teste)

    if(sexo.value == 'Homem') {
        if(ano > 50 ){
            //img.setAttribute('src', '_fotos/foto-idoso-m.png')
            img.src = '_fotos/foto-idoso-m.png'
        } else if (ano > 30 && ano <= 50 ) {
            //img.setAttribute('src', '_fotos/foto-adulto-m.png')
            img.src = '_fotos/foto-adulto-m.png'
            
        }else if(ano >= 10 && ano <= 30) {
            //img.setAttribute('src', '_fotos/foto-jovem-m.png')
            img.src = '_fotos/foto-jovem-m.png'
        } else {
            //img.setAttribute('src', '_fotos/foto-bebe-m.png')
            img.src = '_fotos/foto-bebe-m.png'
        }
    } else if(sexo.value == 'Mulher') {
        if(ano > 50 ){
            //img.setAttribute('src', '_fotos/foto-idoso-f.png')
            img.src = '_fotos/foto-idoso-f.png'
        } else if (ano > 30 && ano <= 50 ) {
            //img.setAttribute('src', '_fotos/foto-adulto-f.png')
            img.src = '_fotos/foto-adulto-f.png'
        }else if(ano >= 10 && ano <= 30) {
            //img.setAttribute('src', '_fotos/foto-jovem-f.png')
            img.src = '_fotos/foto-jovem-f.png'
        } else {
            //img.setAttribute('src', '_fotos/foto-bebe-f.png')
            img.src = '_fotos/foto-bebe-f.png'
        }
   }
    texto.innerHTML = `Detectamos ${sexo.value} com ${ano} anos!`
    //res.appendChild(img) // faz a imagem aparecer
    
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

    if(anoDigitado.length == 0 || anoDigitado > anoAtual) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {

        if( (anoDigitado - anoAtual) >= 0) {
            return (anoDigitado - anoAtual)
        } else {
            return (anoAtual - anoDigitado)
        }
    }

}