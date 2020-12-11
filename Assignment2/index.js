// Variable declaration
var isHotOutside = true;
var isWeekday = true;
var hasMoneyInPocket = true;

var costOfMilk = 3.00;
var moneyInWallet = 10.00;
var thirstLevel = 6;

var shouldBuyIceCream = false;
var willGoSwimming = false;
var isAGoodDay = false;
var willBuyMilk = false;

//
if(isHotOutside && hasMoneyInPocket){
    shouldBuyIceCream = true;
}

if(isHotOutside && !isWeekday) illGoSwimming = true;

if(isHotOutside && hasMoneyInPocket && !isWeekday) isAGoodDay = true; 

if(isHotOutside && (thirstLevel >=3) && moneyInWallet >= (2 * costOfMilk)) willBuyMilk= true;

//
console.log("Should I buy Ice Cream: " + shouldBuyIceCream);
console.log("Amount of Money In Wallet: " + moneyInWallet );
console.log("It is a good day: " + isAGoodDay );
console.log("I will buy milk: " +  willBuyMilk );
console.log("It is a weekday: " + isWeekday ); 






