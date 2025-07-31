// Toggle Sidebar Menu
const btnToggleMenu = document.getElementById('btnToggle')
const sidebar = document.getElementById('menuSidebar')

btnToggleMenu.addEventListener('click', () => {
  const isShown = sidebar.classList.toggle('show')
  btnToggleMenu.setAttribute('aria-expanded', isShown)
})

// Toggle Anchors
const toggleBtnAnchors = document.getElementById('toggleAnchorsBtn')
const anchors = document.getElementById('anchors')

toggleBtnAnchors?.addEventListener('click', () => {
  const isExpanded = anchors.classList.toggle('show')
  toggleBtnAnchors.setAttribute('aria-expanded', isExpanded)
  toggleBtnAnchors.textContent = isExpanded ? '↑ Ocultar Tópicos' : '☰ Ver Tópicos'
})
