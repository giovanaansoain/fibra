$(document).ready(function(){

  // ABRIR E FECHAR MENU

  var botaoAbrirFecharMenu = $(".botao.abrir-fechar-menu");
  var menuHamburguer = $(".menu-hamburguer");
  var backgroungMenu = $(".bg-branco");
  var imgBotao = $(".botao.abrir-fechar-menu img");

  botaoAbrirFecharMenu.click(abrirFecharMenu);

  function abrirFecharMenu(){
    menuHamburguer.toggleClass("ativo");
    imgBotao.toggleClass("ativo");
    backgroungMenu.toggleClass("ativo");
  }

  // ABRIR POPUP DE BUSCA

  var botaoBusca = document.querySelectorAll("#search button");
  var popup = document.querySelector(".popup");

  for (var i = 0; i < botaoBusca.length; i++) {
    botaoBusca[i].onclick = abrirPopup;
  }

  function abrirPopup() {
    popup.classList.add("ativo");
  }

  // FECHAR POPUP DE BUSCA

  var botaoFecharBusca = $(".fechar-popup");

  botaoFecharBusca.click(fecharPopup);

  function fecharPopup() {
    popup.classList.remove("ativo");
  }

  // ADD OU REMOVER MEDIDAS DE BUSCA

  var medidaFiltro = document.querySelectorAll(".opcao span.medida");
  var botaoAddMedida = document.querySelectorAll("button.add-medida");
  var botaoRemoveMedida = document.querySelectorAll("button.remove-medida");

  for (var i = 0; i < botaoAddMedida.length; i++) {
    botaoAddMedida[i].onclick = identificarMedidaAtual;
  }

  for (var i = 0; i < botaoRemoveMedida.length; i++) {
    botaoRemoveMedida[i].onclick = identificarMedidaAtual;
  }

  function identificarMedidaAtual(){
    var divBotaoAddClicado = this.parentNode;
    var spanAtual = divBotaoAddClicado.querySelector("span.medida");
    var medidaAtual = parseInt(spanAtual.innerText);

    if (this == botaoAddMedida["0"] || this == botaoAddMedida["1"]) {
      addMedida();
    } else {
      if (medidaAtual > 1) {
        removeMedida();
      }
    }

    function addMedida() {
      somarMedida = medidaAtual+1;
      spanAtual.innerText = somarMedida;
    }

    function removeMedida(){
      subtrairMedida = medidaAtual-1;
      spanAtual.innerText = subtrairMedida;
    }
  }

  // AVANÇAR E VOLTAR SLIDE

  var slideDiv = $("#slides");
  var slides = $(".slide");
  var slidesLength = slides.length;


  $('.seta.direita').click(avancarSlide);
  function avancarSlide(evento) {
    var dataSlideAtivo = parseInt($(".active")["0"].dataset.slide);
    if (dataSlideAtivo >= slidesLength-1) {
      mudarSlide(0);
    } else {
      mudarSlide(dataSlideAtivo+1);
    }
  }

  $('.seta.esquerda').click(voltarSlide);
  function voltarSlide(evento) {
    var dataSlideAtivo = parseInt($(".active")["0"].dataset.slide);
    if(dataSlideAtivo <= 0){
      mudarSlide(slidesLength-1);
    } else {
      mudarSlide(dataSlideAtivo-1);
    }
  }


  function mudarSlide(slideSeguinte){
    var slideAtivo = $(".active");
    if ($(window).width() > 960) {
      slideDiv.css("transform", "translateX(-" + slideSeguinte + "00%)");
    } else {
      slideDiv.css("transform", "translateX(-" + slideSeguinte + "00vw)");
    }
    slideAtivo.removeClass("active");
    $("[data-slide=" + slideSeguinte + "]").addClass("active");

    ativarBullet();
  }

  var slider = $("#slider");

  if(slider != null){
    criaBullets();

    function criaBullets(){
      for (var i = 0; i < slidesLength; i++) {
        criarUmBullet(i);
      }

      function criarUmBullet(numeroSlides){
        $(".bullets ul")
          .append("<li class='bullet'><button class='botao transparente'></button></li>");
        $(".bullets li").eq(0).addClass("active");
      }

      $('.bullets ul li').click(function() {
        var slideSeguinte = $(this).index();
        mudarSlide(slideSeguinte);
      });
    }

    function ativarBullet(){
      var dataSlideAtivo = parseInt($(".active")["0"].dataset.slide);
      $(".bullets li").eq(dataSlideAtivo).addClass("active");
    }

  }

  // PARA DESKTOP

  if ($(window).width() > 960) {
    $("#header .topo").addClass("container");
    $("#slider").addClass("container").css("overflow-x","hidden");
    $(".slide").css("width","100%");
    $(".redes-sociais").removeClass("container");
  }


});
