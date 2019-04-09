
const CardsColor = [
    "star", "blue", "aqua", "gold", "gray", "black", 
    "star", "blue", "aqua", "gold", "gray", "black"
];


let cards = document.getElementsByClassName('card-body');
cards = [...cards];
console.log(cards);
console.log(cards.length);
//change to table

const startTime = new Date().getTime();

let activeCard = '';
const activeCards = [];

const gamePairs = cards.length/2;
let gameResult = 0;

const clickCard = function(){
    console.log('clickCard');
    activeCard = this;

if (activeCard == activeCards[0]) {return;};


    activeCard.classList.remove('hidden'); 
//after 1 click
    if(activeCards.length === 0) {
        activeCards[0] =  activeCard;
        console.log('after 1 click');
        return;
    }
//after 2 click
    else {
        console.log('after 2 click');
        cards.forEach (card =>
            card.removeEventListener('click', clickCard))
            activeCards[1] = activeCard;
            setTimeout(function(){
                if (activeCards[0].className == activeCards[1].className){
                    console.log('paired')
                    activeCards.forEach(card => card.classList.add('off'))
                    gameResult++;
//mute paired cards
                    cards = cards.filter(card => !card.classList.contains('off'));
                    console.log(cards.length+' pairs left');

//end of game                    
                    if (gameResult == gamePairs){
                        const endTime = new Date().getTime();
                        const gameTime = (endTime-startTime)/1000
                        alert(`You Won! your time score is ${gameTime} seconds`)
                        location.reload();
                    }
                    
                }
                else {
                    console.log('try again');
                    activeCards.forEach(card => card.classList.add('hidden'))  
                }
                activeCard = "";
                activeCards.length = 0;
                cards.forEach(card => card.addEventListener('click', clickCard));
            },1000)
    }

}

const init = function() {
    cards.forEach(card  => {
        const position = Math.floor(Math.random() * CardsColor.length);
        card.classList.add(CardsColor[position]);
        CardsColor.splice(position, 1);
    })

    setTimeout(function () {
        cards.forEach(card => {
            card.classList.add('hidden')
            card.addEventListener('click', clickCard)
        })        
    }, 1000)
};

init();


