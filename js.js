document.addEventListener("DOMContentLoaded", function () {


let button = document.getElementById("button");

  button.addEventListener("click", function () {
  

    let colorInput = document.querySelector('input[type="color"]');
    let selectedColor = colorInput.value;

    document.body.style.backgroundColor = selectedColor;

  });
});


function changerCouleur () {
// récupérer la couleur







}