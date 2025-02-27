function finalizar_tutorial() {
  localStorage.setItem("tutorial", true);
  window.location.href = "../";
}

function finalizar_tutorial2() {
  localStorage.setItem("tutorial", true);
  location.reload();
}

function abrirTutorial() {
  var tutorial = document.querySelector("#tutorial");
  tutorial.showModal();
  tutorial.addEventListener("click", close_modal);
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

function close_modal(e) {
  console.log(e);
  if (e.target.tagName === "DIALOG") {
    tutorial.close();
    tutorial.removeEventListener("click", close_modal);
  }
}
