alert("welcome")
var secret="bader"
var userInput=prompt("guess the secret code")
while(secret !=userInput){
userInput=prompt("please try again")
}

var userName=prompt("please provide your name");

var userAge=prompt("please provide your age");
if ( userAge >= 18){
console.log("yes");
var userColor=prompt("please provide your color");
confirm("wlcame to our store");
var price=20
var amountofRipple=prompt("how many ripple you do want")
var amountofxrp=prompt("how many xrp you do want")
var amountofbitcoin=prompt("how many bitcoin you do want");
var totalamount= (amountofbitcoin + amountofxrp + amountofRipple);
function ava(totalamount){
    avgsalary=(totalamount*price)/3;
alert("your averagesalary is"+avgsalary)
}
ava(totalamount)
if (totalamount>1 && totalamount< 50){
    alert("congrat you earned 10% discount next time");
}else if(totalamount >=50 && totalamount<1000){

}else if(amountofbitcoin >=50 && amountofbitcoin<1000){
    alert("congrat you earned 25% discount next time");
}else if((totalamount) =0){
    alert("sorry");
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

var userinputnumber= prompt("number of pic")
for ( var i = 0; i <= userinputnumber; i++) {
    (document.write('<img src="https://pbs.twimg.com/profile_images/875749462957670400/T0lwiBK8_400x400.jpg">'))
}


console.log(userAge);
console.log(userName);
console.log(userColor);



