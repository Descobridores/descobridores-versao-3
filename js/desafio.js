var Titulos = [
  'Aposte na Soma',
  'Construindo Pipas',
  'Desafio da Escada',
  'Desafio da Ilha',
  'Desafio da Pá Suja',
  'Desafio das Bandeiras',
  'Desafio das Varetas',
  'Desafio do Dragão',
  'Flores no Jardim',
  'Gincana das Alturas',
  'Milu e Nala',
  'Monstros na Roda',
  'Organizando o Curral',
  'Palitos Coloridos',
  'Quantos Retângulos?',
  'Sequência de Triângulos',
  'Torre da Matilda',
  'Triângulos Amigos',
  'Triângulos no Pentágono',
  'Triângulos Numéricos',
]
var Descricoes = [
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
  'Um fazendeiro possui 3 cavalos, 3 porcos e 3 vacas. Em sua fazenda, há um curral dividido em 9 partes, dispostas em 3 fileiras de 3. O fazendeiro já colocou um porco e um cavalo. Agora, ele quer que você preencha as partes vazias, de modo que cada uma seja ocupada somente por um animal, e em cada fileira haja um animal de cada tipo.',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
]
var Tamanho = Titulos.length - 1

function download(uri, nome) {
  var link = document.createElement('a')
  link.download = nome
  link.href = uri
  link.click()
}

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
  var img1 = new Image()
  img1.src = './assets/img/Desafios/' + indice + '.png'
  // Para testar texto e imagem separados no desafio do curral
  if (indice == 12) {
    var img2 = new Image()
    img2.src = './assets/img/Desafios/' + indice + '-1.png'
  }

  if (indice == 12) {
    $(
      '<a id="curral" class="btn btn-primary" href="curral.html" style="background-color: #3298ff; font-size: 20px; margin: auto; margin-top:20px;">Iniciar desafio</a>',
    ).insertAfter('#ImagemDesafio')
  } else $('a#curral').remove()

  img1.onerror = function () {
    document
      .getElementById('ImagemDesafio')
      .setAttribute('style', 'display:none')
  }

  img1.onload = function () {
    document.getElementById('ImagemDesafio').setAttribute('src', img1.src)
    document
      .getElementById('ImagemDesafio')
      .setAttribute('style', 'display:block')
  }

  if (indice == 12) {
    img2.onerror = function () {
      document
        .getElementById('IlustracaoDesafio')
        .setAttribute('style', 'display:none')
    }

    img2.onload = function () {
      document.getElementById('IlustracaoDesafio').setAttribute('src', img2.src)
      document.getElementById('IlustracaoDesafio').style.cssText =
        'display:block; height: 360px; width: 360px;'
    }
    $('#IlustracaoDesafio').show()
  } else {
    $('#IlustracaoDesafio').hide()
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

function retiraAcentos(str) {
  com_acento =
    'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ'

  sem_acento =
    'AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr'
  novastr = ''
  for (i = 0; i < str.length; i++) {
    troca = false
    for (a = 0; a < com_acento.length; a++) {
      if (str.substr(i, 1) == com_acento.substr(a, 1)) {
        novastr += sem_acento.substr(a, 1)
        troca = true
        break
      }
    }
    if (troca == false) {
      novastr += str.substr(i, 1)
    }
  }
  return novastr
}

function inserir_imagens(busca) {
  var i = 0
  var indexs = []
  var titulo = document.getElementById('titulo')
  var buscaSimplificada = retiraAcentos(busca.toLowerCase())

  // converte strings para letras minusculas sem acento
  for (var i = 0; i < Titulos.length; i++) {
    var tituloTemp = retiraAcentos(Titulos[i].toLowerCase())
    if (tituloTemp.includes(buscaSimplificada)) {
      indexs.push(i)
    }
  }

  titulo.innerHTML =
    '<h2>Resultados da pesquisa por: ' + '"' + busca + '"' + ' </h2><hr>'

  for (i = 0; i <= Tamanho; i++) $('#' + i).hide()

  for (i = 0; indexs[i] !== undefined; i++) {
    $(`#${indexs[i]}`).show()
  }
}
