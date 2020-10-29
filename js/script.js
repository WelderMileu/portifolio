function navigation() {
    const content = document.querySelector('.fixado');
    const iconsNav = document.querySelector('.icon-nav');
    
    const position = window.scrollY;

    if(position > 400) {
        content.classList.remove('absolute')
        content.classList.add('bg-white', 'fixed', 'shadow-lg')

        iconsNav.classList.add('text-gray-500')            
    } else {
        content.classList.add('absolute')
        content.classList.remove('bg-white', 'fixed', 'shadow-lg')
      
        iconsNav.classList.remove('text-gray-500')
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
const buttonClose = document.querySelector('.fa-close');

buttonOpen.addEventListener('click', openDrawer)
buttonClose.addEventListener('click', closeDrawer)

window.addEventListener('scroll', navigation)