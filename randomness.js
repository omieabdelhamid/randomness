const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
function randomNumber() {
    let yuh = Math.floor( 21 * Math.random());
    console.log(yuh);
    
}

randomNumber()

function randomLetter() {
    let yurr = alphabet[Math.floor( 26 * Math.random())];
    console.log( yurr);
}
randomLetter();