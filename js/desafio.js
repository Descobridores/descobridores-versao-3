var Titulos = [
  'Aposte na Soma', //0
  'Construindo Pipas', //1
  'Desafio da Escada', //2
  'Desafio da Ilha', //3
  'Desafio da Pá Suja', //4
  'Desafio das Bandeiras', //5
  'Desafio das Varetas', //6
  'Desafio do Dragão', //7
  'Flores no Jardim', //8
  'Gincana das Alturas', //9
  'Milu e Nala', //10
  'Monstros na Roda', //11
  'Organizando o Curral', //12
  'Palitos Coloridos', //13
  'Quantos Retângulos?', //14
  'Sequência de Triângulos', //15
  'Torre da Matilda', //16
  'Triângulos Amigos', //17
  'Triângulos no Pentágono', //18
  'Triângulos Numéricos', //19
]

var indice

var Descricoes = [
  'Podem jogar dois ou mais jogadores. Nesse desafio, a cada jogada, são lançados dois dados ao mesmo tempo e os números de suas faces são somados. O que vale é o resultado da soma. Quais são os possíveis resultados dessas somas? Agora vamos apostar! Cada descobridor escolhe um dos possíveis resultados das somas para apostar. Um sorteio define a ordem dos jogadores. O primeiro a jogar lança o par de dados e anota o resultado da soma num papel. O próximo jogador também joga o par de dados e anota o resultado no mesmo papel, e assim por diante. O jogo termina quando cada um jogar o par de dados 20 vezes. Ganha quem apostou no resultado que foi anotado mais vezes no papel. Todas as apostas têm a mesma chance de ganhar? Por quê?',
  'Júlia e Dudu são irmãos e resolveram construir pipas com a ajuda do pai. Eles tinham papéis de 3 cores diferentes, azul, laranja e amarelo. O modelo que querem construir possui 5 partes, como representado ao lado. Eles querem que as partes que se tocam na pipa não tenham a mesma cor.',
  'Uma pessoa está no degrau da metade de uma escada. Sobe 5 degraus, desce 7, volta a subir 4 e depois mais 9, e chega ao último degrau.',
  'Na figura abaixo vemos uma ilha com uma costa muito recortada e alguns sapos.',
  '',
  '',
  'Mário montou um cubo com 12 varetas iguais e quer pintá-las de modo que varetas que se encontrem tenham cores diferentes.',
  'A bruxa Sabrina deu à sua coruja Ninha uma colher de poção mágica, achando que era xarope para a tosse. Ninha se transformou em um dragão de três caudas e três cabeças. Para desfazer o feitiço, Sabrina precisará cortar todas as cabeças e todas as caudas do dragão com sua espada mágica. Mas atenção, com sua espada a bruxa só poderá cortar de cadat vez: ou uma cabeça, ou duas cabeças, ou uma cauda, ou duas caudas. Além disso: • Se cortar uma cabeça, nasce outra cabeça, • Se cortar duas cabeças, nada nasce, • Se cortar uma cauda, nascem duas outras caudas, • Se cortar duas caudas, nasce uma cabeça,',
  'Helena trabalha numa floricultura e recebeu uma encomenda diferente. Ela deveria montar um jardim, distribuindo os dez vasos de flores mostrados abaixo, de modo que o total de flores seja 22 em cada uma das quatro fileiras indicadas na imagem abaixo.',
  'Três amigos, Paulo, Débora e Carlos, participarão de uma gincana da escola. Para iniciá-la, eles precisarão fazer uma fila em ordem crescente, de acordo com a altura de cada um, ocupando os espaços, conforme ilustrado abaixo. Em seguida, eles deverão trocar de posição para formar uma fila em ordem decrescente. Mas eles poderão fazer apenas 5 deslocamentos e: • Cada espaço pode ser ocupado por apenas um participante, • Não é permitido dois participantes trocarem de posição entre si, • O participante pode andar para o espaço seguinte, se estiver vazio, ou pular um participante, conforme ilustrado abaixo.',
  'Lariane tem duas cachorrinhas idênticas, Milu e Nala. Elas têm exatamente o mesmo peso. O peso delas é um número inteiro. Olhe para as balanças e descubra quanto pesa cada cachorrinha. Milu come 30 g de ração três vezes por dia. Nala 47 g duas vezes por dia.',
  'No planeta Estrileto moram 3 tipos de monstros. É preciso colocar um monstro em cada espaço da roda ao lado, de modo que a quantidade de pernas em três espaços consecutivos nunca seja o triplo de algum número.',
  'Um fazendeiro possui 3 cavalos, 3 porcos e 3 vacas. Em sua fazenda, há um curral dividido em 9 partes, dispostas em 3 fileiras de 3. O fazendeiro já colocou um porco e um cavalo. Agora, ele quer que você preencha as partes vazias, de modo que cada uma seja ocupada somente por um animal, e em cada fileira haja um animal de cada tipo.',
  'Para construir a figura abaixo foram usados nove palitos. Os palitos podem ser pintados de azul, verde ou vermelho, desde que cada triângulo tenha seus lados com três cores diferentes. Alguns palitos já foram pintados, como mostra a figura.',
  'Você sabia que conseguimos construir retângulos com qualquer número de quadrados? Por exemplo, com 6 quadrados podemos fazer 2 retângulos. Com 3 quadrados, quantos retângulos você consegue formar? E com 12?',
  '',
  '',
  'Este jogo tem nove fichas triangulares, como as mostradas abaixo. As fichas devem ser colocadas em cima do molde ao lado, de modo que as pontas que se encontram tenham sempre o mesmo desenho.',
  '',
  'Ana e Beatriz decidiram brincar com o jogo Triângulo Numérico. O objetivo do jogo é completar as peças não preenchidas em cada triângulo ao lado, respeitando a regra: O número de uma peça é igual à soma dos dois números abaixo dele.',
]
var Tamanho = Titulos.length - 1

function AbrirPDF(setter) {
  var pdf
  var validaIndice = indice >= 1 && indice <= 20
  if (setter === 'acomp' && validaIndice) {
    pdf = './assets/pdf/' + indice + 'acomp.pdf'
  } else if (setter === 'analise' && validaIndice) {
    pdf = './assets/pdf/' + indice + 'analise.pdf'
  } else if (setter === 'impressao' && validaIndice) {
    pdf = './assets/pdf/' + indice + 'impressao.pdf'
  }
  window.open(pdf)
}

function AntesProximo(elem, type, random, setIndice) {
  indice = parseInt(elem.name)

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
  var img1 = new Image()
  img1.src = './assets/img/Desafios/' + indice + '.svg'

  // Para testar texto e imagem separados no desafio do curral
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

  for (i = 0; i <= Tamanho; i++) $('#vinheta' + i).hide()

  $('#vinheta' + indexs[0]).show()
  for (i = 1; indexs[i] !== undefined; i++) {
    $('#vinheta' + indexs[i - 1]).after($('#vinheta' + indexs[i]))
    $('#vinheta' + indexs[i]).show()
  }
}
