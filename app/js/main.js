(function(){


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  })

  
  let mixer = mixitup('.mix-gallery__inner', {
    load: {
        filter: '.bedroom'
    }
})


  let menuBtn = document.querySelector('.header__menu-btn')
  let sideMenu = document.querySelector('.side-menu')
  let sideMenuCloseBtn = document.querySelector('.side-menu__close')

  let playBtn = document.querySelector('.about__play-link')
  let closePopUp = document.querySelector('.pop-up__close')
  let popUpWindow = document.querySelector('.pop-up')

  menuBtn.addEventListener('click', ()=> sideMenu.classList.add('side-menu--emerge'))
  sideMenuCloseBtn.addEventListener('click', ()=> sideMenu.classList.remove('side-menu--emerge'))


  playBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    popUpWindow.classList.add('pop-up--active')
})

  closePopUp.addEventListener('click', ()=> {
    popUpWindow.classList.remove('pop-up--active')
  })

  document.addEventListener('click', (e)=> {
    if(e.target == popUpWindow){
      popUpWindow.classList.remove('pop-up--active')
    }
  })


}())