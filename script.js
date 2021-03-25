const quoteContainer = document.querySelector('.container');
const quoteText = document.querySelector('.quote-text');
const quoteUser = document.querySelector('.quote-user');
const quoteButton = document.querySelector('.quote-button');

const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];

let quoteData = [];
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        quoteData = data.quotes;
        console.log(quoteData);
});

let index,value;

quoteButton.addEventListener("click",()=>{
    do {
        index = Math.floor(Math.random()*colors.length);
    } while (value === index);
    value = index;
    console.log(index);
    changeText();
    changeColor(index);
});


function changeColor(rNumber){
    quoteContainer.style.backgroundColor = colors[rNumber];
    quoteButton.style.backgroundColor = colors[rNumber];

    quoteText.style.color = colors[rNumber];
    quoteUser.style.color = colors[rNumber];
    

}

function changeText(){
    const rQuote = Math.floor(Math.random()*quoteData.length);

    let quote = quoteData[rQuote].quote;
    let author = quoteData[rQuote].author;

    quoteText.textContent = ' " ' + quote + ' " ';
    quoteUser.textContent = ' - ' + author;

}


