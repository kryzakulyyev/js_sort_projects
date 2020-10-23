/*
Create a function which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted numbers in ascending and descending order 

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/ 

const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, "75", "🍕"];

sortAges=arr=>{
  return arr.filter(element => typeof element == 'number');
 
  }


//5 Hard Mode (with For each loop)
//  sortAges=arr=>{
//   let ages = [];
//   for(i= 0; i<arr.length; i++){
// if(typeof arr[i] == 'number'){
//   ages.push(arr[i]);
// }
//   }
//   return ages.sort((a,b)=> a-b);
//   }
  console.log(sortAges(arrCase1));
  console.log(sortAges(arrCase2));
 




/* ======= TESTS ===== */
