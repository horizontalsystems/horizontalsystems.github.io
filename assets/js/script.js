function dropdownMenu() {
  const lang = document.querySelector('.with-dropdown')
  const menu = document.querySelector('.with-dropdown .nav-dropdown')
  if (!menu) {
    return
  }

  lang.addEventListener('mouseover', function () {
    menu.className = 'nav-dropdown active'
  })

  lang.addEventListener('mouseout', function () {
    menu.className = 'nav-dropdown'
  })
}

document.addEventListener('DOMContentLoaded', function () {

})
