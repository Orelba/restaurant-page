function home() {
  const home = document.createElement('div')
  home.setAttribute('id', 'home')

  const cursiveText = document.createElement('p')
  cursiveText.textContent = 'Welcome'
  cursiveText.classList.add('cursive')

  const heading = document.createElement('h1')
  heading.textContent = 'The Nightfast'

  const breakLine = document.createElement('hr')

  const description = document.createElement('p')
  description.textContent = 'Who said breakfast was a morning thing?'
  description.classList.add('description')

  const btn = document.createElement('button')
  btn.textContent = 'See the menu'
  btn.classList.add('menu-btn')

  home.append(cursiveText, heading, breakLine, description, btn)

  return home
}

export default home