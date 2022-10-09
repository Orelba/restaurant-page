function about() {
  const about = document.createElement('div')
  about.setAttribute('id', 'about')

  const cursiveText = document.createElement('p')
  cursiveText.textContent = 'Welcome'
  cursiveText.classList.add('cursive')

  const heading = document.createElement('h1')
  heading.textContent = 'About Us'
  heading.classList.add('dark')

  const breakLine = document.createElement('hr')

  const paragraph = document.createElement('p')
  paragraph.classList.add('about-text')
  paragraph.textContent = `This is not a real restaurant!\r\n
   It's a web development project based on Javascript, HTML and CSS featuring the Webpack module bundler.\r\n
   I'm Orel Barzilay and I hope you like it so far.`

  about.append(cursiveText, heading, breakLine, paragraph)

  return about
}

export default about