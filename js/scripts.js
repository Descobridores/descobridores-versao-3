/*!
 * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
;(function ($) {
  'use strict' // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          'easeInOutExpo',
        )
        return false
      }
    }
  })

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide')
  })

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 74,
  })

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink')
    } else {
      $('#mainNav').removeClass('navbar-shrink')
    }
  }
  // Collapse now if page is not at top
  navbarCollapse()
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse)
})(jQuery) // End of use strict

// Insere imagens das crianças
function maximize_images(index) {
  // Get the modal
  var modal = document.getElementById('myModal')

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(index.id)
  console.log(index.id)
  var modalImg = document.getElementById('img01')
  var captionText = document.getElementById('caption')
  modal.style.display = 'block'
  modalImg.src = img.src

  // Get the <span> element that closes the modal
  var span = document.getElementById('fechar')

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none'
    console.log('yo')
  }
}

function insert_images() {
  var inner = ''
  var images = document.getElementById('fotos')

  for (var i = 0; i < 21; i++) {
    if (i % 3 == 0) inner += '<div class = "row">'

    inner +=
      '<div class="col-lg-4 col-md-6 col-sm-12">' +
      '<img id="foto' +
      i +
      '" class="img-thumbnail myImg" onclick="maximize_images(this)" style="width: 400px; height: 300px;" src="./assets/img/Criancas/' +
      i +
      '.jpg"/>' +
      '</div>'

    if ((i + 1) % 3 == 0) inner += '</div><br />'
  }

  images.innerHTML = inner
}
