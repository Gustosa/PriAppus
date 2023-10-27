function Corrigir() {
    var alternativas = document.querySelectorAll('.alternativa');
    var resposta_usuario = [], resposta_correta = [];

    alternativas.forEach(element => {

        element.classList.remove("vermelho");

        if (element.children[0].checked) {
            resposta_usuario.push(element);
        }

        if (element.classList.contains('correta')) {
            resposta_correta.push(element);
        }
    })

    resposta_correta.forEach(resposta => {
        resposta.classList.add('verde');
    })

    resposta_usuario.forEach(resposta => {
        if (resposta.classList.contains('verde')) {
            return;
        } else {
            resposta.classList.add('vermelho');
        }
    })



    /*if (resposta_usuario === resposta_correta) {
        resposta_usuario.classList.add("verde");
    } else {
        resposta_usuario.classList.add("vermelho");
    }*/
}