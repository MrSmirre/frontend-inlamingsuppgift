const hackerbutton = document.querySelector('.hacker-button');
hackerbutton.addEventListener('click', hackerMode)


const navs = document.querySelectorAll('nav a, header, body')
const headersUl = document.querySelectorAll('header');
const h2s = document.querySelectorAll('h2');
const hackerBtn = document.querySelector('.hacker-button');
const selectedRadioBtn = document.querySelectorAll('li')
const inputs = document.querySelectorAll('input');

const textOutput = document.querySelector('#text-output');
let totalValue = 0;

function hackerMode(){
    navs.forEach(navLoop =>{
        navLoop.classList.toggle('hackermode-body');
    })
    headersUl.forEach(itemBackground =>{
        itemBackground.classList.toggle('hackermode-item-backgrounds');
    })
    h2s.forEach(itemBackground =>{
        itemBackground.classList.toggle('hackermode-bottom-border');
    })
    selectedRadioBtn.forEach(btn =>{
        btn.classList.toggle('hackermode');
    })
    hackerBtn.classList.toggle('hacker-button-dark');
}

function calculatePrice(){
    totalValue = 0;
    for (input of inputs){
        if(input.checked){
            totalValue += Number(input.value);
        }
    }
    if (totalValue >= 30000){
        textOutput.textContent = 'Du är en gamer. Din setups totala värde är ' + totalValue + 'kr';
    } else{
        textOutput.textContent = 'Du är en noob. Din setups totala värde är ' + totalValue + 'kr';
    }
}

for (input of inputs){
    input.addEventListener("change", calculatePrice);
}
