function toggleLightClass(event) {
  if (event.target.classList.contains("light")) {
    event.target.classList.toggle("light-strip.on");
  }
}

// Ajout de l'écouteur d'événements au clic sur le document
document.addEventListener("click", toggleLightClass);
