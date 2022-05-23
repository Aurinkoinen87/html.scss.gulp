(function(){
  let menuBtn = document.querySelector('.header__menu-btn')
  let sideMenu = document.querySelector('.side-menu')
  let sideMenuCloseBtn = document.querySelector('.side-menu__close')

  menuBtn.addEventListener('click', ()=> sideMenu.classList.add('side-menu--emerge'))
  sideMenuCloseBtn.addEventListener('click', ()=> sideMenu.classList.remove('side-menu--emerge'))
}())