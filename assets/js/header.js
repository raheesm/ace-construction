const headerButton = document.getElementById("menuButton");
const menuCloseButton = document.getElementById("menuCloseBtn");
const menuList = document.querySelector(".mobile-menu__list");
const brandLogo = document.querySelector(".brand-logo");


headerButton.addEventListener('click',()=>{
    menuList.style.cssText="display:flex"
    document.body.style.cssText="overflow-y:hidden"
})
menuCloseButton.addEventListener('click',()=>{
    menuList.style.cssText="display:none"
    document.body.style.cssText="overflow-y:visible"

    
})
