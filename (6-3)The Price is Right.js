/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 */
 
var prices = [1.35, 48.11, 88.54, 8.50, 9.99, 1.00, 1.18, 67.00];

for(var i =0 ; i<prices.length;i++){
    if(i === 0){
        prices[0]= 2.33;
    }else if(i===2){
        prices[2]=77.9;
    }else if(i ===6){
        prices[6]=2.33;
    }
}

// your code goes here
console.log(prices);
