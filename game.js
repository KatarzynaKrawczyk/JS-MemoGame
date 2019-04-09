
const CardsColor = [
    "red", "blue", "aqua", "gold", "gray", "black", 
    "red", "blue", "aqua", "gold", "gray", "black"
];


let cards = document.getElementsByClassName('card-body');
cards = [...cards];
console.log(cards);
console.log(cards.length);
//change to table

const init = function() {
    cards.forEach(function(card) {
        const position = Math.floor(Math.random() * CardsColor.length);
        card.classList.add(CardsColor[position]);
        CardsColor.splice(position, 1);
    } )

    setTimeout(function () {
        cards.forEach(function (card){
            card.classList.add('hidden')
        })        
    }, 2000)
};

init();


