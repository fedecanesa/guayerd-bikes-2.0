

function animar()
{
    const LOGO = document.querySelector('img.imgLogo');
    LOGO.classList.toggle("animar");
}

setInterval(animar, 5000);



/* PRUEBAS: Zona de pruebas -> reordenar el caso de adoptarse -----------------------------------------*/

anime.timeline({loop: 2})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: Infinity,
    easing: "easeOutExpo",
    delay: 1000
  });