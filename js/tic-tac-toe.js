// TIC TAC TOE
const tic_tac_toe = {
  // ATTRIBUTES
  board: ['', '', 'P', '', '', '', 'C', '', ''],
  symbols: {
    options: ['P', 'C', 'B', ''],
    turn_index: 0,
    id_animal: 0,
    change: function (element, id) {
      this.turn_index = element
      this.id_animal = id
    },
  },
  wrong_indexs: [],
  porco: 2,
  cavalo: 2,
  boi: 3,
  tentativas: 0,
  botoes: null,
  container_element: null,

  // FUNCTIONS
  init: function (container) {
    this.container_element = container
    this.turn_index = 3
  },

  init_botoes: function (container) {
    this.botoes = container
  },

  is_full: function () {
    for (var i = 0; i < 9; i++) if (this.board[i] === '') return false

    return true
  },

  check_board: function () {
    var i, animal
    var returning = false

    // checking rows
    animal = this.board[0]
    if (this.board[1] == animal) {
      this.wrong_indexs.push(0)
      this.wrong_indexs.push(1)
      returning = true
    } else if (this.board[2] == animal) {
      this.wrong_indexs.push(0)
      this.wrong_indexs.push(2)
      returning = true
    }
    if (this.board[1] == this.board[2]) {
      this.wrong_indexs.push(1)
      this.wrong_indexs.push(2)
      returning = true
    }

    animal = this.board[3]
    if (this.board[4] == animal) {
      this.wrong_indexs.push(3)
      this.wrong_indexs.push(4)
      returning = true
    } else if (this.board[5] == animal) {
      this.wrong_indexs.push(3)
      this.wrong_indexs.push(5)
      returning = true
    }
    if (this.board[4] == this.board[5]) {
      this.wrong_indexs.push(4)
      this.wrong_indexs.push(5)
      returning = true
    }

    animal = this.board[6]
    if (this.board[7] == animal) {
      this.wrong_indexs.push(6)
      this.wrong_indexs.push(7)
      returning = true
    } else if (this.board[8] == animal) {
      this.wrong_indexs.push(6)
      this.wrong_indexs.push(8)
      returning = true
    }
    if (this.board[7] == this.board[8]) {
      this.wrong_indexs.push(7)
      this.wrong_indexs.push(8)
      returning = true
    }

    // checking columns
    animal = this.board[0]
    if (this.board[3] == animal) {
      this.wrong_indexs.push(0)
      this.wrong_indexs.push(3)
      returning = true
    } else if (this.board[6] == animal) {
      this.wrong_indexs.push(0)
      this.wrong_indexs.push(6)
      returning = true
    }
    if (this.board[3] == this.board[6]) {
      this.wrong_indexs.push(3)
      this.wrong_indexs.push(6)
      returning = true
    }

    animal = this.board[1]
    if (this.board[4] == animal) {
      this.wrong_indexs.push(1)
      this.wrong_indexs.push(4)
      returning = true
    } else if (this.board[7] == animal) {
      this.wrong_indexs.push(1)
      this.wrong_indexs.push(7)
      returning = true
    }
    if (this.board[4] == this.board[7]) {
      this.wrong_indexs.push(4)
      this.wrong_indexs.push(7)
      returning = true
    }

    animal = this.board[2]
    if (this.board[5] == animal) {
      this.wrong_indexs.push(2)
      this.wrong_indexs.push(5)
      returning = true
    } else if (this.board[8] == animal) {
      this.wrong_indexs.push(2)
      this.wrong_indexs.push(8)
      returning = true
    }
    if (this.board[5] == this.board[8]) {
      this.wrong_indexs.push(5)
      this.wrong_indexs.push(8)
      returning = true
    }

    return returning
  },

  make_play: function (position) {
    if (this.board[position] === '' && this.symbols.turn_index != 3) {
      this.board[position] = this.symbols.options[this.symbols.turn_index]

      this.draw()

      if (this.is_full()) {
        if (this.check_board()) {
          this.color_board_red()
          return true
        } else {
          this.color_board_green()
        }
      } else return false

      return true
    } else {
      return false
    }
  },

  draw_beggining: function () {
    let content = ''
    let draw_botoes = ''

    for (i in this.board) {
      if (this.board[i] === 'P') {
        content +=
          '<div onclick="tic_tac_toe.make_play(' +
          i +
          ')">' +
          '<img src="./assets/img/porco.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else if (this.board[i] === 'B') {
        content +=
          '<div onclick="tic_tac_toe.make_play(' +
          i +
          ')">' +
          '<img src="./assets/img/boi.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else if (this.board[i] == 'C') {
        content +=
          '<div onclick="tic_tac_toe.make_play(' +
          i +
          ')">' +
          '<img src="./assets/img/cavalo.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else {
        content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + '</div>'
      }
    }
    try {
      document.querySelector('#porco1').remove()
    } catch {}
    try {
      document.querySelector('#porco2').remove()
    } catch {}
    try {
      document.querySelector('#cavalo1').remove()
    } catch {}
    try {
      document.querySelector('#cavalo2').remove()
    } catch {}
    try {
      document.querySelector('#boi').remove()
    } catch {}
    try {
      document.querySelector('#boi2').remove()
    } catch {}
    try {
      document.querySelector('#boi3').remove()
    } catch {}

    draw_botoes =
      '<br />' +
      '<h4 id="tentativas">Tentativas: ' +
      this.tentativas +
      '</h4>' +
      '<div class="row">' +
      '<button id="porco1" class="btn" onclick="tic_tac_toe.symbols.change(0, 1)" style="height: 100px; width: 100px"> <img src="./assets/img/porco.png" style="height: 70px; width: 70px" /> Porco</button>' +
      '<button id="porco2" class="btn" onclick="tic_tac_toe.symbols.change(0, 2)" style="height: 100px; width: 100px"> <img src="./assets/img/porco.png" style="height: 70px; width: 70px" /> Porco</button>' +
      '</div>' +
      '<div class="row">' +
      '<button id="cavalo1" class="btn" onclick="tic_tac_toe.symbols.change(1, 3)" style="height: 100px; width: 100px"> <img src="./assets/img/cavalo.png" style="height: 70px; width: 70px"/> Cavalo</button>' +
      '<button id="cavalo2" class="btn" onclick="tic_tac_toe.symbols.change(1, 4)" style="height: 100px; width: 100px"> <img src="./assets/img/cavalo.png" style="height: 70px; width: 70px"/> Cavalo</button>' +
      '</div>' +
      '<div class="row">' +
      '<button id="boi1" class="btn" onclick="tic_tac_toe.symbols.change(2, 5)" style="height: 100px; width: 100px"> <img src="./assets/img/boi.png" style="height: 70px; width: 70px"/><br /> Boi</button>' +
      '<button id="boi2" class="btn" onclick="tic_tac_toe.symbols.change(2, 6)" style="height: 100px; width: 100px"> <img src="./assets/img/boi.png" style="height: 70px; width: 70px"/><br /> Boi</button>' +
      '<button id="boi3" class="btn" onclick="tic_tac_toe.symbols.change(2, 7)" style="height: 100px; width: 100px"> <img src="./assets/img/boi.png" style="height: 70px; width: 70px"/><br /> Boi</button>' +
      '</div>' +
      '<br /><br /> <button class="btn btn-primary" onclick="tic_tac_toe.start()"> Tentar de novo </button>'

    this.container_element.innerHTML = content
    this.botoes.innerHTML = draw_botoes
  },

  check_board_position: function () {
    if (this.board[2] == 'P' && this.board[6] == 'C') {
      for (var i = 0; i < 9; i++) {
        if (i != 2 && i != 6) {
          if (this.board[i] != '') {
            return true
          }
        }
      }
    } else return true

    return false
  },

  start: function () {
    if (this.check_board_position()) this.tentativas++
    this.board = ['', '', 'P', '', '', '', 'C', '', '']
    this.symbols.turn_index = 0
    this.wrong_indexs = []
    this.porco = 2
    this.cavalo = 2
    this.boi = 3
    this.draw_beggining()
  },

  color_board_green: function () {
    let content = ''

    for (i in this.board) {
      if (this.board[i] === 'P') {
        content +=
          '<div style="border: 6px solid green;">' +
          '<img src="./assets/img/porco.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else if (this.board[i] === 'B') {
        content +=
          '<div style="border: 6px solid green;">' +
          '<img src="./assets/img/boi.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else if (this.board[i] == 'C') {
        content +=
          '<div style="border: 6px solid green;">' +
          '<img src="./assets/img/cavalo.png" style="height: 100px; width:100px"/>' +
          '</div>'
      }
    }

    this.container_element.innerHTML = content
  },

  is_index: function (index) {
    for (var j = 0; j < this.wrong_indexs.length; j++)
      if (index == this.wrong_indexs[j]) return true

    return false
  },

  color_board_red: function () {
    let content = ''

    for (i in this.board) {
      if (this.board[i] === 'P') {
        if (this.is_index(i)) {
          content +=
            '<div style="border: 6px solid red;" >' +
            '<img src="./assets/img/porco.png" style="height: 100px; width:100px"/>' +
            '</div>'
        } else {
          content +=
            '<div >' +
            '<img src="./assets/img/porco.png" style="height: 100px; width:100px"/>' +
            '</div>'
        }
      } else if (this.board[i] === 'B') {
        if (this.is_index(i)) {
          content +=
            '<div style="border: 6px solid red;" >' +
            '<img src="./assets/img/boi.png" style="height: 100px; width:100px"/>' +
            '</div>'
        } else {
          content +=
            '<div >' +
            '<img src="./assets/img/boi.png" style="height: 100px; width:100px"/>' +
            '</div>'
        }
      } else if (this.board[i] == 'C') {
        if (this.is_index(i)) {
          content +=
            '<div style="border: 6px solid red;" >' +
            '<img src="./assets/img/cavalo.png" style="height: 100px; width:100px"/>' +
            '</div>'
        } else {
          content +=
            '<div>' +
            '<img src="./assets/img/cavalo.png" style="height: 100px; width:100px"/>' +
            '</div>'
        }
      }
    }

    this.container_element.innerHTML = content
  },

  insertAfter: function (referenceNode, newNode) {
    try {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
    } catch {}
  },

  draw: function () {
    let content = ''

    for (i in this.board) {
      if (this.board[i] === 'P') {
        content +=
          '<div onclick="tic_tac_toe.make_play(' +
          i +
          ')">' +
          '<img src="./assets/img/porco.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else if (this.board[i] === 'B') {
        content +=
          '<div onclick="tic_tac_toe.make_play(' +
          i +
          ')">' +
          '<img src="./assets/img/boi.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else if (this.board[i] == 'C') {
        content +=
          '<div onclick="tic_tac_toe.make_play(' +
          i +
          ')">' +
          '<img src="./assets/img/cavalo.png" style="height: 100px; width:100px"/>' +
          '</div>'
      } else {
        content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + '</div>'
      }
    }

    switch (this.symbols.id_animal) {
      case 1:
        var el = document.createElement('porco1')
        el.innerHTML =
          '<img class="stop-action" src="./assets/img/porco.png" style="height: 100px; width: 100px"/>'
        var div = document.getElementById('porco1')
        this.insertAfter(div, el)
        try {
          document.querySelector('#porco1').remove()
          this.symbols.turn_index = 3
        } catch {}
        break

      case 2:
        var el = document.createElement('porco2')
        el.innerHTML =
          '<img class="stop-action" src="./assets/img/porco.png" style="height: 100px; width: 100px"/>'
        var div = document.getElementById('porco2')
        this.insertAfter(div, el)
        try {
          document.querySelector('#porco2').remove()
          this.symbols.turn_index = 3
        } catch {}
        break

      case 3:
        var el = document.createElement('cavalo1')
        el.innerHTML =
          '<img class="stop-action" src="./assets/img/cavalo.png" style="height: 100px; width: 100px"/>'
        var div = document.getElementById('cavalo1')
        this.insertAfter(div, el)
        try {
          document.querySelector('#cavalo1').remove()
          this.symbols.turn_index = 3
        } catch {}
        break

      case 4:
        var el = document.createElement('cavalo2')
        el.innerHTML =
          '<img class="stop-action" src="./assets/img/cavalo.png" style="height: 100px; width: 100px"/>'
        var div = document.getElementById('cavalo2')
        this.insertAfter(div, el)
        try {
          document.querySelector('#cavalo2').remove()
          this.symbols.turn_index = 3
        } catch {}
        break

      case 5:
        var el = document.createElement('boi1')
        el.innerHTML =
          '<img class="stop-action" src="./assets/img/boi.png" style="height: 100px; width: 100px"/>'
        var div = document.getElementById('boi1')
        this.insertAfter(div, el)
        try {
          document.querySelector('#boi1').remove()
          this.symbols.turn_index = 3
        } catch {}
        break

      case 6:
        var el = document.createElement('boi2')
        el.innerHTML =
          '<img class="stop-action" src="./assets/img/boi.png" style="height: 100px; width: 100px"/>'
        var div = document.getElementById('boi2')
        this.insertAfter(div, el)
        try {
          document.querySelector('#boi2').remove()
          this.symbols.turn_index = 3
        } catch {}
        break

      case 7:
        var el = document.createElement('boi3')
        el.innerHTML =
          '<img class="stop-action" src="./assets/img/boi.png" style="height: 100px; width: 100px"/>'
        var div = document.getElementById('boi3')
        this.insertAfter(div, el)
        try {
          document.querySelector('#boi3').remove()
          this.symbols.turn_index = 3
        } catch {}
        break
    }

    this.container_element.innerHTML = content
  },
}
