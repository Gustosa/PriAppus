var slide_ativo = 0;

function mudarSlide(acao) {
    var slides = document.querySelectorAll('.slide'); //querySelector seleciona tudo com a classe "slide"
    slides.forEach(element => {
        if (element.classList.contains('ativo')) { //verifica se na classe tem a palavra "ativo"
            element.classList.remove('ativo')
        }
    });



    if (acao == 1) { //1 = próximo
        if (slide_ativo < slides.length - 1) {
            slides[slide_ativo + 1].classList.add('ativo')
            slide_ativo++;
        }
        else {
            slides[0].classList.add('ativo')
            slide_ativo = 0
        }
    }
    else { // -1 = anterior
        if (slide_ativo == 0) {
            slides[slides.length - 1].classList.add('ativo');
            slide_ativo = slides.length - 1
        }
        else {
            slides[slide_ativo - 1].classList.add('ativo')
            slide_ativo--;
        }
    }
}