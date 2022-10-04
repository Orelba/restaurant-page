import './style.css'

function contentDiv() {
  const contentDiv = document.createElement('div')

  contentDiv.setAttribute('id', 'content')

  return contentDiv;
}

document.body.appendChild(contentDiv())