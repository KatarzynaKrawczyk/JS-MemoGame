
const CardsColor = [
    "red", "blue", "aqua", "gold", "gray", "black", 
    "red", "blue", "aqua", "gold", "gray", "black"
];

let cards2 = document.querySelectorAll("div");
console.log(cards2);
cards2 = [...cards2];
console.log(cards2);
console.log(cards2.length);

//let divCards = document.querySelectorAll("div");
//console.log(divCards);

let cards = document.getElementsByClassName('card-body');
console.log(cards);
console.log(cards instanceof Array);



console.log(cards);
cards = [...cards];
console.log(cards);
console.log(cards.length);
//change to table



const init = function(){
    cards.forEach(function(card) {
        const position = Math.floor(Math.random() * CardsColor.length);
        card.classList.add(CardsColor[position]);
    } )
};
//init();
