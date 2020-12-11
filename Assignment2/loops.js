
var  startValue = 0;
// A
while ( startValue < 100) {
   startValue = startValue + 2;
   console.log("Loop Value:" + startValue);
}

//B
var  startValue = 100;

while ( startValue > 0) {
   startValue = startValue - 3;
   console.log("Loop Value:" + startValue);
}

//C

for( otherLoop = 1; otherLoop < 100; otherLoop= otherLoop + 2){
   console.log("Other Loop Value: " + otherLoop);
}

//D

for ( startValue = 0; startValue <= 100; startValue++ ) {

   if(startValue % 5 == 0 && startValue % 3 == 0 ) {
      console.log("Hello World"); 
   }
   else if(startValue % 5 == 0 ) {
      console.log("World");
   }
   else if(startValue % 3 == 0) {
      console.log("Hello");
   }
   else console.log(startValue);
}

