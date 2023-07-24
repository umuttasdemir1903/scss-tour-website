const menuBtn=document.querySelector('.navbar-menu-btn');

const menuLinks=document.querySelector('.navbar-links');

menuBtn.addEventListener('click', ()=>{
    menuLinks.classList.toggle('mobile-menu');
})