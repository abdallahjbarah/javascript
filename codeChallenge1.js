/* TASK 1 : Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula :
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter) : */

//SOLUTION :

let markMass = 78;
let markHeight = 1.69;

let johnMass = 95;
let johnHeight = 1.88;

let bmi1;
let bmi2;

bmi1 = markMass / markHeight ** 2;
console.log(bmi1); //27.3099681

bmi2 = johnMass / johnHeight ** 2;
console.log(bmi2); //26.8786781

let markHigherBMI = bmi1 > bmi2;
console.log(markHigherBMI);

//************************************************************************

//TASK 2 :

/* Use the BMI from TASK #1, and the code you already wrote, and 
improve it.

Your tasks: 

1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!" 
*/

// SOLUTION :

if (bmi1 > bmi2) {
  console.log(`Mark's BMI ${bmi1} is greater than John's BMI ${bmi2}`);
} else {
  console.log(`john's BMI (${bmi2}) is greater than Mark's BMI ${bmi1}`);
}

//******************************************************************************************

//TASK 3 :

/*  There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//SOLUTION :

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Draw");
} else {
  console.log("Koalas win");
}

//Bonus1
const scoreDolphins1 = (97 + 112 + 101) / 3;
const scoreKoalas1 = (109 + 95 + 123) / 3;

console.log(scoreDolphins1, scoreKoalas1);

if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) {
  console.log("Dolphins win");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Draw");
} else if (scoreDolphins1 < scoreKoalas1 && scoreKoalas1 >= 100) {
  console.log("Koalas win");
}

//Bonus 2

const scoreDolphins2 = (97 + 112 + 101) / 3;
const scoreKoalas2 = (109 + 95 + 106) / 3;

console.log(scoreDolphins2, scoreKoalas2);

if (
  scoreDolphins2 === scoreKoalas2 &&
  scoreDolphins2 >= 100 &&
  scoreKoalas2 >= 100
) {
  console.log("Draw");
} else {
  console.log("No one won");
}

//************************************************************************************************

//TASK 4 :

/* Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 43

*/

//SOLUTION :

const bill = 275;
const tip = bill <= 275 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

console.log(
  `the bill was ${bill} and the tip is ${tip} , total value is ${total}`
);
