import home from './home'
import GithubIcon from '../images/GitHub-Mark-Light-32px.png'

function navMenu() {
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  const liHome = document.createElement('li')
  const liMenu = document.createElement('li')
  const liAbout = document.createElement('li')

  nav.appendChild(ul)

  liHome.textContent = 'Home'
  liMenu.textContent = 'Menu'
  liAbout.textContent = 'About'

  ul.append(liHome, liMenu, liAbout)
  
  return nav
}

function main() {
  const mainDiv = document.createElement('main')

  mainDiv.appendChild(home())

  return mainDiv
}

function footer() {
  const footer = document.createElement('footer')
  const text = document.createElement('p')
  const anchor = document.createElement('a')

  text.textContent = 'Created By Orel Barzilay'

  const image = new Image(20, 20)
  image.src = GithubIcon

  anchor.href = 'https://github.com/Orelba/restaurant-page'
  anchor.target = '_blank'

  anchor.appendChild(image)

  footer.append(text, anchor)

  return footer
}

function template() {
  return [navMenu(), main(), footer()]
}

export default template