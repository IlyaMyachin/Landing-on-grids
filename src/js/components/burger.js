const burgerBtn = document.querySelector('#header__burger')
const navMenu = document.querySelector('#header__nav')

burgerBtn.addEventListener('click', () => {
  if (burgerBtn.classList.contains('is-active')) {
    navMenu.classList.remove('is-active')
    burgerBtn.classList.remove('is-active')
    navMenu.style.display = 'flex'
    function setDisplayNone() {
      navMenu.style.display = 'none'
    }
    setTimeout(setDisplayNone, 300)
  }
  else {
    navMenu.classList.add('is-active')
    navMenu.style.display = 'flex'
    burgerBtn.classList.add('is-active')
  }
})
