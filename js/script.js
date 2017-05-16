$( document ).ready(function() {

  var slides = $("#slides");

  function avancarSlide() {
    slides.css("transform", "translateX(-100vw)");
  }

  var setaDireita = $(".seta.direita");
  setaDireita.click(avancarSlide);








});
