import './styles/style.css'
import initWebsite from './modules/init'
import home from './modules/home'
import menu from './modules/menu'
import about from './modules/about'

initWebsite() // Render website structure

function switchTab(tab) {
  const main = document.querySelector('main')

  main.innerHTML = ''

  main.appendChild(tab())
}

const initEventListeners = (() => {
  const contentDiv = document.querySelector('#content')
  const homeBtn = document.querySelector('.home-btn')
  const aboutBtn = document.querySelector('.about-btn')

  contentDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-btn')) switchTab(menu)
  })
  homeBtn.addEventListener('click', switchTab.bind(this, home))
  aboutBtn.addEventListener('click', switchTab.bind(this, about))
})()