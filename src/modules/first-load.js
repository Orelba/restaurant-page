import template from './template.js'

function firstLoad() {
  const contentDiv = document.createElement('div')

  contentDiv.setAttribute('id', 'content')

  contentDiv.append(...template())

  document.body.append(contentDiv)
}

export default firstLoad