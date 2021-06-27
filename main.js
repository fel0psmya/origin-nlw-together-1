const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show');
  })
}

/*Mudar a sombra do header ao dar scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll () {
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Testemonials slider */
const swiper = new Swiper ('.swiper-container', {
  slidesPerView: 1, // 1 slide 
  pagination: {
    el: '.swiper-pagination' // Adicionando paginação
  },
  mousewheel: true, // botão de rolagem do mouse nos slides 
  keyboard: true, // ativa as setas para passar os slides
  breakpoints:  { // media queries breakpoints 
    767: {
      slidesPerView: 2,
      setWrapperSize: true // fixar o tamanho  dps sçides
    }  
  }
});

/* ScrollReveal */
const scrollReveal = ScrollReveal({
  origin: 'top', // onde iniciará
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`#home .image, #home .text, #about .image, #about .text, #services header, #services .cards, #testemonials header, #testemonials .testemonials, #contact .text, #contact .links, #footer .container`, { interval: 100 }) // com crase vc pode organizar em linhas 

/* Back-to-top */
const backToTopButton = document.querySelector('#back-to-top');
function backToTop() {
  if (window.scrollY > 200) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

/* Menu ativo de acordo com a seção selecionada */
const sections = document.querySelectorAll('main section[id]') // conter ID
function activateMenuAtCurrentSection() {
  checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 // deslocamento no eixo y + (altura * 8) / 4

  for (const section of sections) {
    sectionTop = section.offsetTop
    sectionHeight = section.offsetHeight
    sectionId = section.getAttribute('id')
    
    checkpointStart = checkpoint >= sectionTop
    checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']') // *= -> valor especifico
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']') // *= -> valor especifico
        .classList.remove('active')
    }
  }
}

/* Scroll */
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})


