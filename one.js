// var fruits = ["apple","banana","mango"];
// console.log(fruits[2]);
// var numbers = [1,2,3,4,5,6];
// console.log(numbers.length);
// var colors = ["red", "green"];
// colors.push("blue");
// console.log(colors);
// colors.splice(0,1);
// console.log(colors);
// var a =[1,2,3,4];
// var b =[8,4,5,6];
// var c =  [...a,...b];
// console.log(c);
var numbers1 =[10,5,23,45,78,65];
function even(numbers1){
  var newarray = [];
  for(i= numbers1.length-1; i>=0; i--){
    if(numbers1[i]%2 == 0){
      newarray.push(numbers1[i]);
    }
  }
  console.log(newarray);
}
even(numbers1);