var mobilemenu = document.getElementById('mobile-menu')
var xButton = document.getElementById('X')
var menubutton = document.getElementById('menu-button')
var hamburgerbutton = document.getElementById('hamburger-button')
var open = false

menubutton.addEventListener('click',check)

function check(){
  open = !open;
  if (open) {
    hamburgerbutton.classList.add('hidden')
    xButton.classList.remove('hidden')
    mobilemenu.classList.remove('hidden')
  }
  if (!open) {
    hamburgerbutton.classList.remove('hidden')
    xButton.classList.add('hidden')
    mobilemenu.classList.add('hidden')
  }
}