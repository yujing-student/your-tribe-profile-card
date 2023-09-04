//const expandButton = document.querySelector('header button')// header button
const expandButton = document.querySelector('button')
expandButton.addEventListener('click', expand)//klikken open gaan

function expand () {
  document.body.classList.toggle('expand')
}
