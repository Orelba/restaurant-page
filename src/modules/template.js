import home from './home'
import GithubIcon from '../images/GitHub-Mark-Light-32px.png'

function navMenu() {
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')

  const liHome = document.createElement('li')
  liHome.textContent = 'Home'
  liHome.classList.add('home-btn')

  const liMenu = document.createElement('li')
  liMenu.textContent = 'Menu'
  liMenu.classList.add('menu-btn')

  const liAbout = document.createElement('li')
  liAbout.textContent = 'About'
  liAbout.classList.add('about-btn')

  ul.append(liHome, liMenu, liAbout)

  nav.appendChild(ul)

  return nav
}

function main() {
  const main = document.createElement('main')

  main.appendChild(home())

  return main
}

function footer() {
  const footer = document.createElement('footer')

  const text = document.createElement('p')
  text.textContent = 'Created By Orel Barzilay'

  const image = new Image(20, 20)
  image.src = GithubIcon
  image.alt = 'Github Icon'

  const anchor = document.createElement('a')
  anchor.href = 'https://github.com/Orelba/restaurant-page'
  anchor.target = '_blank'
  anchor.ariaLabel = 'Visit My Github'
  anchor.appendChild(image)

  footer.append(text, anchor)

  return footer
}

function template() {
  return [navMenu(), main(), footer()]
}

export default template