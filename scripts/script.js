const expandButton = document.querySelector('header button')// header button

expandButton.addEventListener('click', expand)//klikken open gaan

function expand () {
  document.body.classList.toggle('expand')
}
