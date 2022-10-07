import './styles/style.css'
import firstLoad from './modules/first-load'

firstLoad()

function switchTab(tab) {
  const main = document.querySelector('main')
  
  main.removeChild(div.firstChild)

  tab()
}