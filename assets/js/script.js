$('document').ready(function () {
  var typed = new Typed('#typed', {
    strings: [
      "Welcome, It's a pleasure to see you here! &#128075;",
      "I'm Marília Matias Siqueira &#128587;&#127995;",
      "I'm FRONT-END WEB <strong> Developer</strong> &#128150;",
      '&#8643; Call me on social media &#8642;'
    ],
    backSpeed: 20,
    typeSpeed: 40,
    loop: true,
    startDelay: 1000
  })
  var typed2 = new Typed('#typed2', {
    strings: [
      'Vamos conversar...',
      'Me envie uma mensagem',
      'Um feedback',
      'Talvez, uma proposta 😊',
      'Aguardo seu contato ansiosamente!'
    ],
    typeSpeed: 30,
    backSpeed: 40,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true,
    startDelay: 1000
  })
})

