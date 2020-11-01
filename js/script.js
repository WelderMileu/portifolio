function navigation() {
    const content = document.querySelector('.fixado');
    
    const position = window.scrollY;

    if(position > 400) {
        content.classList.remove('absolute')
        content.classList.add('bg-white', 'fixed', 'shadow-lg')
        content.classList.add('nav-fluid')
    } else {
        content.classList.add('absolute')
        content.classList.remove('bg-white', 'fixed', 'shadow-lg')      
        content.classList.remove('nav-fluid')
    }
}

function openDrawer() {
    const open = document.querySelector('.drawer');    
    
    open.classList.remove('hidden')
    open.classList.add('w-full')
}

function closeDrawer() {
    const open = document.querySelector('.drawer');    
    
    open.classList.add('hidden')
    open.classList.remove('w-full')
}

const buttonOpen = document.querySelector('.fa-bars');
const buttonClose = document.querySelector('.fa-times-circle');

buttonOpen.addEventListener('click', openDrawer)
buttonClose.addEventListener('click', closeDrawer)

window.addEventListener('scroll', navigation)