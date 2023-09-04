let PlayerOne = document.querySelector(".img1");
let PlayerTwo = document.querySelector(".img2");
let title = document.querySelector("h1");


let randNumberOne = Math.floor(Math.random() * 6);
let randNumberTwo = Math.floor(Math.random() * 6);

function randomImage(){
    PlayerOne.setAttribute("src", `./images/dice${randNumberOne + 1}.png`);
    PlayerTwo.setAttribute("src", `./images/dice${randNumberTwo + 1}.png`);
}
randomImage();


if (randNumberOne > randNumberTwo){
    title.innerHTML ="Player One Won!";
}else if (randNumberTwo > randNumberOne){
    title.innerHTML="Player Two Won!";
}else {
    title.innerHTML = "Draw";
}
