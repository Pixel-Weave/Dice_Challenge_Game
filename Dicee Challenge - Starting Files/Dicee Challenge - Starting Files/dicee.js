
var randomnumber1 = (Math.floor(Math.random() * 6) + 1);

if (randomnumber1 === 1) {
    var img_1 = "./images/dice1.png";
}
else if (randomnumber1 === 2) {
    img_1 = "./images/dice2.png";
}
else if (randomnumber1 === 3) {
    img_1 = "./images/dice3.png";
}
else if (randomnumber1 === 4) {
    img_1 = "./images/dice4.png";
}
else if (randomnumber1 === 5) {
    img_1 = "./images/dice5.png";
}
else if (randomnumber1 === 6) {
    img_1 = "./images/dice6.png";
}

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", img_1);

var randomnumber2 = (Math.floor(Math.random() * 6) + 1);

if (randomnumber2 === 1) {
    var img_2 = "./images/dice1.png";
}
else if (randomnumber2 === 2) {
    img_2 = "./images/dice2.png";
}
else if (randomnumber2 === 3) {
    img_2 = "./images/dice3.png";
}
else if (randomnumber2 === 4) {
    img_2 = "./images/dice4.png";
}
else if (randomnumber2 === 5) {
    img_2 = "./images/dice5.png";
}
else if (randomnumber2 === 6) {
    img_2 = "./images/dice6.png";
}

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", img_2);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else if (randomnumber1 = randomnumber2) {
    document.querySelector("h1").innerHTML="That's a Draw!";
}