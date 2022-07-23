const searchBtn = document.querySelector('#header__search')
const searchForm = document.querySelector('#header__form')
const closeBtn = document.querySelector('#header__close')

searchBtn.addEventListener('click', () => {
  searchForm.classList.add('is-active')
  closeBtn.classList.add('is-active')
})

closeBtn.addEventListener('click', () => {
  searchForm.classList.remove('is-active')
  closeBtn.classList.remove('is-active')
})
