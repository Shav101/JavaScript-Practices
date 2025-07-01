/*
Create a series of variables that represent a driver's license or passport.  You might include properties such as:

dateOfBirth
age
isOrganDonor
streetAddress
city
state
zip / postal code
idNumber
etc


After you have created the properties, create a string variable that contains all of the data from the other variables/constants and then print it into a single readable sentence.

The final output might look similar to this:  "Hi, my name is Jill and I was born on 12/20/80 and I live at 224 Worthington drive and my id number is..." etc etc

Be sure to include all of the properties.

*/

var name = "Mark";
var dateOfBirth = "01/01/2025";
var age = 65;
var isOrganDonor = "not";
var streetAddress = "123 Main Street";
var city = "Baltimore";
var state = "Maryland";
var zip = 21256;
var idNumber = 1;

var fullInfo =
  "Hi my name is " +
  name +
  " I was born in " +
  dateOfBirth +
  " and i am " +
  age +
  " years old. I am " +
  isOrganDonor +
  " a organ donor. My address is " +
  streetAddress +
  " " +
  city +
  " " +
  state +
  " " +
  zip +
  " and my ID number is " +
  idNumber +
  ".";

console.log(fullInfo);
