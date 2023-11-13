function finalizar_tutorial() {
  localStorage.setItem("tutorial", true);
  window.location.href = "../";
}

function abrirTutorial() {
  var tutorial = document.querySelector('#tutorial');
  tutorial.showModal()
}

function verifica_tutorial() {
  if (!localStorage.key("tutorial")) {
    location.href = "tutoriais/tutorial_index.html";
  }
}

function verifica_tutorial2() {
  if (!localStorage.key("tutorial")) {
    location.href = "tutoriais/tutorial_telas.html";
  }
}