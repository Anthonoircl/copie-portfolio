// Récupération de l'élément HTML du boutton de scroll vers le haut
let mybutton = document.getElementById("myBtn");

// Scroll vers le haut de la page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}