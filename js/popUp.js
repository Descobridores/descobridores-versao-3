function PopUp() {
  if (!window.localStorage.getItem('PrimeiraVez')) {
    document.getElementById('PopUp').setAttribute('style', 'display: block')
    window.localStorage.setItem('PrimeiraVez', 'false')
  }
}

PopUp()
