// How to play CAD:

// Chips - to count lives
// Cards - 52 cards, 13 of each suit, imgs that show symbols of the cards, A-K CHECK
// Shuffle - Way to shuffle
// Way to deal
// Flip down and flip up
// draw cards, discard cards
// knock button
// CAD button (shutdown switch)
// Honor system
// Game UI
// Menu
// Amount of Players

// Noises (Sounds)

// Rule system
// Win Condition (Pop Up Text on the screen stating Win or Loss)

// Lose Condition
// Game Condition
// turn process (timer)
// Visual of Cards - types of Backs

// Hand storage
// Card selection
// Discard play

var cards = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']; 
var suits = ['c', 'd', 'h', 's']; 
var deck = []

console.log('cards array', cards)
// console.log('cards array last element', cards[cards.length - 1])
// console.log('suits array index 0', suits[0])
// console.log('suits array length', suits.length)

cards.map(card => {
    suits.forEach(suit => {
        deck.push(card + suit)
  
    })
})


console.log('deck', deck);


