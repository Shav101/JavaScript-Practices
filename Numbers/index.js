/*

Exercise

Consider this scenario: You have a shopping cart with 6 items in it.  
The total price of all the items combined is $78.50 You have a coupon that gets you 25% off of the total price. 
After the coupon is applied, taxes will be applied at a rate of 7.75% of the total cost (cost after coupon).

Create 6 different variables that represent the price of each item
Perform addition operations to get the total price of all 6 items and store it in a variable ($78.50)
Create a variable for the 25% coupon
Create a variable called priceAfterDiscount and store the total price after the 25% discount has been applied (should equal around $58.87)
Create a variable called taxes that stores the total taxes to be charged using the tax rate (should equal around $4.56)
Create a variable called finalPrice that applies the 7.75% tax rate to priceAfterDiscount.  (should equal around $63.43)

*/

var num1 = 14;
var num2 = 13.5;
var num3 = 14;
var num4 = 16;
var num5 = 11;
var num6 = 10;

var total = num1 + num2 + num3 + num4 + num5 + num6;
console.log(total);

var coupon = 0.25;
var tax = 0.0775;

var discount = total * coupon;
console.log(discount);
var priceAfterDiscount = total - discount;
console.log(priceAfterDiscount);
var taxes = priceAfterDiscount * tax;
console.log(taxes);
var finalPrice = priceAfterDiscount + taxes;
console.log(finalPrice);
