const hackerbutton = document.querySelector('#hacker-button');
hackerbutton.addEventListener('click', hackerMode)


const navs = document.querySelectorAll('nav a, header, body')
const headersUl = document.querySelectorAll('header, ul img');
const h2s = document.querySelectorAll('h2');

function hackerMode(){
    // hackermodeBody.classList.toggle('hackermode-body');
    // hackermodeHeader.classList.toggle('hackermode-header')
    navs.forEach(navLoop =>{
        navLoop.classList.toggle('hackermode-body');
    })
    headersUl.forEach(itemBackground =>{
        itemBackground.classList.toggle('hackermode-item-backgrounds');
    })
    h2s.forEach(itemBackground =>{
        itemBackground.classList.toggle('hackermode-bottom-border');
    })
}