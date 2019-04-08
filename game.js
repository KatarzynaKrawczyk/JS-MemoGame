const CardsColor = [
    "red", "blue", "aqua", "gold", "gray", "black", 
    "red", "blue", "aqua", "gold", "gray", "black"
];
let cards = document.getElementsByClassName("card-body");
console.log(cards);
console.log(cards instanceof Array);

cards = [...cards];
console.log(cards.length);
console.log(cards instanceof Array);
console.log(cards[3]);


//change to table



const init = function(){
    cards.forEach(function(card) {
        const position = Math.floor(Math.random() * CardsColor.length);
        card.classList.add(CardsColor[position]);
    } )
};
//init();
