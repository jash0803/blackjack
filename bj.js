let cards=[]
let sum=0
let message=""
let isAlive =false
let hasBlackjack =false

let player={
playerName:"Jash",
playerChips:150
}
document.getElementById.


function getRandomCard(){
let RandomNumber=Math.floor(Math.random()*11+1)
return RandomNumber
}

function startGame(){
let firstCard=getRandomCard()
let secondCard=getRandomCard()
cards=[firstCard,secondCard]
sum=cards[0]+cards[1]
isAlive=true
renderGame()
}

function renderGame(){

	for(let i=0;i<cards.length;i++)
	{
	document.getElementById("card").textContent+=cards[i]+" "
	}
	document.getElementById("sum").textContent=sum


	if(sum<21){
	message="Do you want to draw a new card?!"
	isAlive=true
	}

	else if(sum===21){
	message="you got a blackjack"
	hasBlackjack=true
	}

	else{
	message="Sorry. You have lost. better luck next time"
	isAlive=false
	}
	document.getElementById("msg").textContent=message
}

function newCard()
{
if(isAlive===true)
{
let thirdCard=getRandomCard()
sum=sum+thirdCard
cards.push(thirdCard)
renderGame()
}
}