window.addEventListener("load", function () {
  // Espera 2 segundos antes de mostrar o site
  setTimeout(function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("site-content").style.display = "block";
  }, 2000); // tempo em milissegundos (2000 = 2s)
});
