 const foods = ["apple", "banana", "carrot", "beetroot", "avacado"];

 //  array.forEach() // only iterates and checks each item of array but do not represent a new array
 var newfoods = foods.forEach((food) => {console.log(food)});

///----- array.map()// map returns new array for the existing
var capital = foods.map(food =>
  food.toUpperCase()
)

////-------array.filter() // returns new array for condition
var numbers = [10 , 20, 30 ,50,60 ,43 ,81 ,65];
 var divided = numbers.filter(number => number%2 === 0);
console.log(divided);

// array1.concat(array2)
var num1 = [22,4,5,6];
var num2 = [11,12,13,44,65,86];
 var num3 = num1.concat(num2);
console.log(num3);

// array.find() same as filter but only works till it finds the first element to return 
var finds = num1.find(item => item % 2 === 0);
console.log(finds);

 // array.findIndex() only works till it finds the first element to return  
 var find1 = num1.findIndex(item => item % 2 != 0);
 console.log(find1);

 //array.findLastIndexOf ----- searches from array.length-1
 var lastFind = num2.findLastIndex(num => num % 2 === 0)
 console.log(lastFind);

 // array.some() --- atleast one element carrey out the condition in boolean
 var findSome = num1.some(num => num %2 !=0 );
 console.log(findSome);
   
// array.reduce() ---- adds eveerything one represents as new array
var sum = num1.reduce((num1,num2) => num1+num2,0 );
console.log(sum);
