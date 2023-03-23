var r1=Math.floor(Math.random()*6)+1; //generate random no 1-6;
var r2=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice"+r1+".png";//dice1.png - dice6.png;
var randomImageSource="images/"+randomDiceImage;

var randdicimg="dice"+r2+".png";
var randimgsrc="images/"+randdicimg;

var dice1=document.querySelectorAll("img")[0];
var dice2=document.querySelectorAll("img")[1];

dice1.setAttribute("src",randomImageSource);
dice2.setAttribute("src",randimgsrc);

if (r1>r2){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="► Player 1 Wins!";
}
else if(r1<r2){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 2 Wins!◄";
}
else{
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="♥It's a Draw!☻";
}