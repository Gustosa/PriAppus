function finalizar_tutorial() {
  localStorage.setItem("tutorial", true);
  window.location.href = "../";
}

function verifica_tutorial() {
  if (!localStorage.key("tutorial")) {
    location.href = "tutoriais/tutorial_index.html";
  }
}
