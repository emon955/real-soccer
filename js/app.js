const MenuBarOpen = document.getElementById('menu-bar-open')
const NavMenuWrapper = document.querySelector('.nav-menu-wrapper')
MenuBarOpen.addEventListener('click',()=>{
    if(NavMenuWrapper.classList.contains('active')){
        NavMenuWrapper.classList.remove('active')
    }else{
        NavMenuWrapper.classList.add('active')
    }
    
})