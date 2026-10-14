/**
 * Variabler för hackerbutton och funktion
 */
const hackerbutton = document.querySelector('.hacker-button');
hackerbutton.addEventListener('click', hackerMode)

/**
 * Variabler för hackermode/darkmode
 */
const body = document.querySelectorAll('nav a, header, body')
const h2s = document.querySelectorAll('h2');
const hackerBtn = document.querySelector('.hacker-button');
const selectedRadioBtn = document.querySelectorAll('li')
const inputs = document.querySelectorAll('input');

/**
 * variabler för att räkna ut priset och för att priset och texten ska synas på sidan
 */
const textOutput = document.querySelector('#text-output');
let totalValue = 0;

/**
 * Funktionen för hackerbutton/darkmode 
 */
function hackerMode(){
    body.forEach(navLoop =>{
        navLoop.classList.toggle('hackermode-body');
    })

    h2s.forEach(itemBackground =>{
        itemBackground.classList.toggle('hackermode-bottom-border');
    })

    hackerBtn.classList.toggle('hacker-button-dark');

    selectedRadioBtn.forEach(btn =>{
        btn.classList.toggle('hackermode');
    })
}

/**
 * Funktion för att räkna ut pris och se om du är en gamer
 */
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
