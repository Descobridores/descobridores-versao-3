var Titulos = [
  'Desafio dos cachorros',
  'Desafio das bandeiras',
  'Organizando o curral',
  '',
  '',
  '',
  'Triângulos numéricos',
  'Palitos coloridos',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
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
  // var texto = document.createTextNode(Descricoes[indice])
  // $('#TextoDesafio').empty()
  // document.getElementById('TextoDesafio').append(texto)

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
  }

  img.onload = function () {
    document.getElementById('DivTextoDesafio')
    document.getElementById('ImagemDesafio').setAttribute('src', img.src)
    document
      .getElementById('ImagemDesafio')
      .setAttribute('style', 'display:block')

    if (indice == 2) {
      $(
        '<a id="curral" class="btn btn-primary" href="curral.html" style="background-color: #3298ff; font-size: 20px; margin: auto; margin-top:10px;">Iniciar desafio</a>',
      ).insertAfter('#ImagemDesafio')
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

// LOGICA BUSCA
function inserir_imagens(busca) {
  var i
  var indexs = []
  var titulo = document.getElementById('titulo')

  for (var i = 0; i < Titulos.length; i++) {
    // converte strings para letras minusculas
    if (Titulos[i].toLowerCase().includes(busca.toLowerCase())) {
      indexs.push(i)
    }
  }

  titulo.innerHTML =
    '<h2>Resultados da pesquisa por: ' + '"' + busca + '"' + ' </h2><hr>'

  for (i = 0; i < 9; i++) $('#' + i).hide()

  for (i = 0; i < indexs.length; i++) {
    switch (indexs[i]) {
      case 0:
        $('#7').show()
        break
      case 1:
        $('#6').show()
        break
      case 2:
        $('#2').show()
        break
      case 3:
        $('#0').show()
        break
      case 4:
        $('#1').show()
        break
      default:
        break
    }
  }
}
