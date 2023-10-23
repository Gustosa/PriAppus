function Corrigir() {
    var alternativas = document.querySelectorAll('.alternativa');
    var resposta_correta, resposta_usuario;

    alternativas.forEach(element => {
        if (element.classList.contains('correto')) {
            resposta_correta = element;
        }

        if (element.checked) {
            resposta_usuario = element;
        }
    })



}