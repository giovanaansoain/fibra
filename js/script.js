$(document).ready(function(){



  var slideDiv = $("#slides");
  var slides = $(".slide");
  var slidesLength = slides.length;

  $(".seta").click(mudarSlide);

  function mudarSlide(evento){
    var direcaoSeta = evento.currentTarget.classList[3];
    var slideAtivo = $(".active");
    var dataSlideAtivo = parseInt($(".active")["0"].dataset.slide);

    if (direcaoSeta == "direita") {
      if (dataSlideAtivo >= slidesLength-1) {
        translateSlide(0);
      } else {
        translateSlide(dataSlideAtivo+1);
      }
    } else {
      if(dataSlideAtivo <= 0){
        translateSlide(slidesLength-1);
      } else {
        translateSlide(dataSlideAtivo-1);
      }
    }

    function translateSlide(slideSeguinte){
      slideDiv.css("transform", "translateX(-" + slideSeguinte + "00vw)");
      slideAtivo.removeClass("active");
      $("[data-slide=" + slideSeguinte + "]").addClass("active");
    }

    bulletIrParaSlide();
  }



  var slider = $("#slider");

  if(slider != null){
    criaBullets();

    function criaBullets(){
      for (var i = 0; i < slidesLength; i++) {
        criarUmBullet(i);
      }

      function criarUmBullet(numeroSlides){
        $(".bullets ul").append("<li class='bullet'><button class='botao transparente'></button></li>");
        $(".bullets li").eq(0).addClass("active");
      }
    }
    
    function bulletIrParaSlide(){
      var dataSlideAtivo = parseInt($(".active")["0"].dataset.slide);
      $(".bullets li").eq(dataSlideAtivo).addClass("active");
    }

  }


});
