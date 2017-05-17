var slideDiv = $("#slides");
var slides = $(".slide");
var slideAtual = $(".slide.active");
var dataSlideAtual = parseInt(slideAtual["0"].dataset.slide);
var seta = $(".seta");

seta.click(mudarSlide);

function mudarSlide(evento){
	var direcaoSeta = evento.currentTarget.classList[3];
	if(direcaoSeta == "direita"){
		var dataProximoSlide = dataSlideAtual + 1;
		slideAtual.removeClass("active");
		var proximoSlide = $(".slide["+dataSlideAtual + 1 +"]");
		console.log(proximoSlide);
		proximoSlide.addClass("active");
	} else {
		
	}
}