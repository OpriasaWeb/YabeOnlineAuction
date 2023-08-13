
var sale = 0.12;
var quit = 0;  
var weeks = 7;
console.log("Number of weeks - " + weeks);

if(weeks != 0){
  var calculateWeeks = 1; // control variable
  var currentPrice = 0;
  if(weeks == 10){
    currentPrice = 0;
    // weeks = 11;
  }else{

    var price = 10.00;
    console.log("Price - " + price);
    currentPrice = price - (price * 0.12);
    // Calculate the input weeks to get the current price
    while(calculateWeeks < weeks){
      currentPrice = currentPrice - (currentPrice * 0.12);
      // console.log("Current price - " + currentPrice);
      // console.log("Calculate week increment - " + calculateWeeks);

      calculateWeeks++;
    }

  }
  
}
  


if(currentPrice == 0){
  console.log("It's totally free!");
} else{
  console.log("Total price: " + currentPrice);
}


