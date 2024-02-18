let randomNumber1 = Math.floor(Math.random()*6 + 1); // creating a random number generator for dice-1
let randomImage = "dice" + randomNumber1 + ".png";   // concactinating the random number and strings
let randomDiceImage = "images/" + randomImage;       // simillarly, concactinating the images/ string and the variable randomImage to give out a random image when we refresh.

let randomNumber2 = Math.floor(Math.random()*6 +1);   // creating a random number for dice-2
let randomImage2 = "images/" + "dice" + randomNumber2 + ".png" // concactinating the file path , random number and the filename.

// For Dice - 1 
document.getElementsByClassName("img1")[0].attributes;
document.getElementsByClassName("img1")[0].getAttribute("src");
document.getElementsByClassName("img1")[0].setAttribute("src" , randomDiceImage); // sets a randomized value to dice no-1

// For Dice - 2 
document.getElementsByClassName("img2")[0].attributes;
document.getElementsByClassName("img2")[0].getAttribute("src");
document.getElementsByClassName("img2")[0].setAttribute("src" , randomImage2);

// Checking for h1 to change accordingly.
if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player one wins!"
}
else if(randomNumber1 === randomNumber2){
    document.querySelector(".container h1").innerHTML = "Completely Rigged!"
}
else{
    document.querySelector(".container h1").innerHTML = "Player 2 wins!"
}