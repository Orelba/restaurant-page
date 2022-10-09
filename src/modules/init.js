import template from './template.js'

// Render website structure
function initWebsite() {
  const contentDiv = document.createElement('div')

  contentDiv.setAttribute('id', 'content')

  contentDiv.append(...template())

  document.body.append(contentDiv)
}

export default initWebsite