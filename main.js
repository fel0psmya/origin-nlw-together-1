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

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* Testemonials slider */
const swiper = new Swiper ('.swiper-container', {
  slidesPerView: 1, // 1 slide 
  pagination: {
    el: '.swiper-pagination' // Adicionando paginação
  },
  mousewheel: true, // botão de rolagem do mouse nos slides 
  keyboard: true, // ativa as setas para passar os slides
});

/* ScrollReveal */
const scrollReveal = ScrollReveal({
  origin: 'top', // onde iniciará
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials . testimonials,
  #contact .text, #contact .link
  `, { interval: 100 }) // com crase vc pode organizar em linhas 