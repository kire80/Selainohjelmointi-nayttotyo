/* Vasemman väripinnan toiminnallisuus */
function changeColor(color) {
  document.getElementById('colorSquare').style.backgroundColor = color;
}

/* Oikean väripinnan toiminnallisuus */
function changeColor2(color2) {
  document.getElementById('colorSquare2').style.backgroundColor = color2;
}

/* Navbar hampurilais ikonin responsiivisuus toiminnallisuus */
function NavResp() {
  const topnav = document.getElementById("myTopnav");
  if (topnav.className === "topnav") {
      topnav.className += " responsive";
  } else {
      topnav.className = "topnav";
  }
}

/* Värien reset napin toiminto */
function resetColors() {
  document.getElementById('colorSquare').style.backgroundColor = "#FFFFFF";
  document.getElementById('colorSquare2').style.backgroundColor = "#FFFFFF";
}

/* Yhteydenottolomakkeen popup kun lähetät sen */
$(document).ready(function() {
  $("#contactForm").submit(function(event) {
      event.preventDefault();
      alert("Kiitos yhteydenotostasi! Otamme sinuun pian yhteyttä.");
      $(this)[0].reset();
  });
});

/* Tooltip popup */
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

/* Popover popup */
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});
