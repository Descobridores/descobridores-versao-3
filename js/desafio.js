var Titulos = [
  'Desafio da pá suja',
  'Torre colorida de Matilda',
  'Palitos coloridos',
  'Desafio da ilha',
  'Desafio da escada',
  'Organizando o curral',
]
var Descricoes = [
  'Com quatro palitos e um pedaço de papel faça igual ao modelo mostrado. Tire a sujeira da pá, movendo apenas dois palitos.',
  'Matilda tem 4 quadrados marrons, 3 quadrados roxos, 2 quadrados laranjas e 1 quadrado verde. Ela quer construir uma torre, de acordo com a figura, que respeite a seguinte regra: "Dois quadrados da mesma cor não podem se tocar"',
  'Na figura ao lado usamos 9 palitos para construí-la. Os palitos podem ser pintados de azul, verde ou vermelho, desde que cada triângulo tenha seus lados com três cores diferentes. Alguns palitos já foram pintados, como mostra a figura. Qual cor pode ser usada para pintar o palito indicado com o X?',
  'Na figura vemos uma ilha com uma costa muito recortada e alguns sapos. Quantos desses sapos estão na ilha?',
  'Uma pessoa se encontra no degrau na metade de uma escada. Sobe 5 degraus, desce 7, volta a subir 4 e depois mais 9 para chegar no último degrau. Quantos degraus a escada tem?',
  'Um fazendeiro possui 3 cavalos, 3 porcos e 3 vacas. Em sua fazenda, há um curral dividido em 9 partes, dispostas em 3 fileiras de 3. O fazendeiro já colocou um porco e um cavalo. Agora, ele quer que você preencha as partes vazias, de modo que cada uma seja ocupada somente por um animal, e em cada fileira haja um animal de cada tipo.',
]
var Tamanho = Titulos.length - 1

function AntesProximo(elem, type, random, setIndice) {
  var indice = parseInt(elem.name)

  if (type == 1) {
    if (indice >= Tamanho) return
    indice++
  } else if (type == 0) {
    if (indice == 0) return
    indice--
  }

  if (setIndice != -1) indice = setIndice
  else {
    if (random) {
      indice = Math.floor(Math.random() * (Tamanho + 1))
    }
  }

  // console.log()
  // console.log(Tamanho)
  document.getElementById('Anterior').setAttribute('name', indice)
  document.getElementById('Proximo').setAttribute('name', indice)
  // Troca de Titulo
  var texto = document.createTextNode(Titulos[indice])
  $('#TituloDesafio').empty()
  document.getElementById('TituloDesafio').append(texto)

  // Troca de texto
  var texto = document.createTextNode(Descricoes[indice])
  $('#TextoDesafio').empty()
  document.getElementById('TextoDesafio').append(texto)

  //Troca de imagem
  var img = new Image()
  img.src = './assets/img/Desafios/' + indice + '.png'

  img.onerror = function () {
    document
      .getElementById('ImagemDesafio')
      .setAttribute('style', 'display:none')

    document
      .getElementById('DivTextoDesafio')
      .setAttribute('class', 'col-lg-12 col-md-12 col-sm-12 mt-4')

    $('a#curral').remove()
  }

  img.onload = function () {
    document
      .getElementById('DivTextoDesafio')
      .setAttribute('class', 'col-lg-8 col-md-6 col-sm-12 mt-4')
    document.getElementById('ImagemDesafio').setAttribute('src', img.src)
    document
      .getElementById('ImagemDesafio')
      .setAttribute('style', 'display:block')
    if (indice == 1) {
      $(
        '<img id="matilde" class="img-thumbnail" style="width: 500px; height: 250px;" src="./assets/img/Desafios/2.1.png" />',
      ).insertAfter('p')
    } else $('img#matilde').remove()

    if (indice == 5) {
      $(
        '<a id="curral" class="btn btn-primary" href="curral.html" style="background-color: #3298ff; font-size: 20px;">Iniciar desafio</a>',
      ).insertAfter('p')
    } else $('a#curral').remove()
  }
  ChecaSetas(indice)
}

// Checa se as setas estão aparecendo e desaparecendo nos finais
function ChecaSetas(indice) {
  if (indice == Tamanho) {
    document
      .getElementById('Proximo')
      .setAttribute(
        'style',
        'margin-left: auto; margin-right: auto; display: none',
      )
    document
      .getElementById('Anterior')
      .setAttribute(
        'style',
        'margin-left: auto; margin-right: auto; display: inline-block',
      )
  } else if (indice == 0) {
    document
      .getElementById('Anterior')
      .setAttribute(
        'style',
        'margin-left: auto; margin-right: auto; display: none',
      )
    document
      .getElementById('Proximo')
      .setAttribute(
        'style',
        'margin-left: auto; margin-right: auto; display: inline-block',
      )
  } else {
    document
      .getElementById('Proximo')
      .setAttribute(
        'style',
        'margin-left: auto; margin-right: auto; display: inline-block',
      )
    document
      .getElementById('Anterior')
      .setAttribute(
        'style',
        'margin-left: auto; margin-right: auto; display: inline-block',
      )
  }
}
