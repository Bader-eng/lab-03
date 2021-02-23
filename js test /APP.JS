alert("welcome")
var userName=prompt("please provide your name");

var userAge=prompt("please provide your age");
if ( userAge >= 18){
console.log("yes");
var userColor=prompt("please provide your color");
confirm("wlcame to our store");
var price=20
var amountofbitcoin=prompt("how many bitcoin you do want");
if (amountofbitcoin >5 && amountofbitcoin< 10){
    alert("congrat you earned 10% discount next time");
}else if(amountofbitcoin >=10 && amountofbitcoin<20){
    alert("congrat you earned 25% discount next time");
}else if(amountofbitcoin=0){
    alert("sorry ");
}
var totalPrice=amountofbitcoin*price
var element=document.getElementById("price")
element.innerText= 'is your final price=' +totalPrice
var element=document.getElementById("name")
element.innerText= 'is your name=' +userName
var element=document.getElementById("age")
element.innerText= 'is your age=' +userAge
var element=document.getElementById("color")
element.innerText= 'is your color=' +userColor
}
else if(userAge < 18){
    alert("you are out the game");
}   else{
    alert("wrong nput")
}





console.log(userAge);
console.log(userName);
console.log(userColor);



