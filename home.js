
//var age = prompt('What is your age?')

//Manipulate DOM with javascript ( change html with js)
//document.getElementById('MyAGE').innerHTML = age;


//How to deal with numbers
var num1 = 10;
++num1;
num1--;
num1 +=10;
num1 -=5;
var num2 = num1%2;
console.log(num2);
console.log(num1);

// Functions
/*
1.Create a function
2.Call a function
*/



//call


// let's create a function that creates a name and that returns to you
// and says hello followed by your name
/*
Name : Qazi
Return " Hello, Qazi";

*/


/*function greeting(name)
{
    var finalResult = 'Hello ' + name; //string concatenation
    console.log(finalResult);
}
*/
 //greeting(name);

// how do arguments work in functions?

// how do we add two numbers together in a function ?

function sumNumbers(num1 , num2)
{
    console.log(num1 + num2);
}

var num = 0;

while(num <=5)
{
num +=1;
console.log(num);
}

//FOr loop

for (let a =0;a<6;a++)
{
    console.log(a);
}

//Data types
let yourAge = 18; //number
let yourName = 'Bob'; //String
let name = {first:'Ben', last:'Dover'}; //Object
let truth = false; //Boolean
let groceries = ['apple' , 'milk' , 'almonds']; //list/array
let random; // undefined
let nothing = null;

//Strings in javascript
let fruit = 'banana';
let moreFruits = 'banana\napple'
console.log(moreFruits);

console.log(moreFruits.length);
console.log(fruit.indexOf('an'));
console.log(fruit.slice(2,4));
console.log(fruit.replace('ban','123'));
//toUpperCase , toLowerCase
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split('')); //(6) ['b', 'a', 'n', 'a', 'n', 'a']\
console.log(fruit.split(','));  //split by a comma

//Array
let fruitss = ['banana' , 'apple' , 'orange' , 'pineapples'];
let fruits = new Array('banana' , 'apples' , 'oranges' , 'litchi');
alert(fruitss[0]);

for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

//Array common methods
console.log(fruits.toString());
console.log(fruits.join('*'));
console.log(fruits, fruits.pop(), fruits); //remove last item
console.log(fruits.push('blackberries'),fruits); //appends
console.log(fruits[3]);
fruits[4] = 'new fruit';
console.log(fruits);
fruits.shift(); // remove first element form a list
console.log(fruits);
fruits.unshift('kiwi'); //add first element to an array
console.log(fruits);

let vegetables = ['asparagus', 'tomato' , 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);

//console.log(allGroceries.slice(1,4));
//console.log(allGroceries.reverse());

let someNumbers = [5,1,2,4,5,7,89];
console.log(someNumbers.sort(function(a,b) {return a-b})); //descending
console.log(someNumbers.sort(function(a,b) {return b-a})); //descending

let emptyArray = new Array();
for(let b = 0;b<9;b++)
{
    emptyArray.push(b);
}
console.log(emptyArray);




