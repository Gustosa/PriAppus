function show_menu() {
  var global_menu = document.getElementById("global_menu");
  if (global_menu.classList.contains("opened")) {
    global_menu.classList.remove("opened");
  } else {
    document.body.addEventListener("click", close_menu, false);
    global_menu.classList.add("opened");
  }
}

function close_menu(e) {
  if (e.target.id !== "show_menu") {
    document.body.removeEventListener("click", close_menu, false);
    global_menu.classList.remove("opened");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn_menu").addEventListener("click", show_menu);
});
