const expandButton = document.querySelector('header button')// header button

expandButton.addEventListener('click', expand)//klikken open gaan

function expand () {
  document.body.classList.toggle('expand')
}
function show() {
  /* Get image and change value
  of src attribute */
  let image = document.getElementById("image");
  image.src =
      "image.jpg"
  document.getElementById("btnID")
      .style.display = "none";}