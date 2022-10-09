function article(title, description, price) {
  const article = document.createElement('article')

  const heading = document.createElement('h2')
  heading.textContent = title
  heading.classList.add('golden')

  const paragraph = document.createElement('p')
  paragraph.textContent = description
  paragraph.classList.add('grey')

  const secondHeading = document.createElement('h2')
  secondHeading.textContent = price
  secondHeading.classList.add('golden')

  const breakLine = document.createElement('hr')

  article.append(heading, paragraph, secondHeading, breakLine)
  return article
}

function menu() {
  const menu = document.createElement('div')
  menu.setAttribute('id', 'menu')

  const cursiveText = document.createElement('p')
  cursiveText.textContent = 'Welcome'
  cursiveText.classList.add('cursive')

  const heading = document.createElement('h1')
  heading.textContent = 'Menu'
  heading.classList.add('dark')

  const breakLine = document.createElement('hr')

  const articles = [
    article('Chilaquiles Divorciados',
      `Mexican "soul food" at its finest.
      Fried corn tortilla pieces simmered with red and green salsas and topped with cream, cheese, onion and cilantro.
      Once you eat that, you are going to be speaking fluent Spanish AMIGO ;-)`, '18$'),

    article('Shakshuka Jaffa',
      `What do you think about, when you think of an Israeli breakfast?
      a rich tomato sauce, topped with eggs and some fresh bread for dipping. a true classic!`, '20$'),

    article("Joe's Pancakes",
      `Uncle Joe's tower of thick, fluffy pancakes, glazed with maple syrup and topped with butter.
      Rumor has it that the recipe is a national secret.`, '14$'),

    article("Sultan's Turkish Coffee",
      `What's better than starting the day with a turkish coffee?
      Starting the night with one! Our fresh roasted Arabica beans brewed to perfection, the traditional way.
       small cup, big energy boost!`, '3$'),
  ]

  menu.append(cursiveText, heading, breakLine, ...articles)

  return menu
}

export default menu