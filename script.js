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
 
  let numbers = [];
  for(i= 0; i<arr.length; i++){
if(typeof arr[i] == 'number'){
  numbers.push(arr[i]);
}
  }
  return numbers.sort((a,b)=> a-b);


//with For each loop
  // let numberArr = [];
  // arr.forEach(item => {
  //   if(typeof item === 'number'){
  //     numberArr.push(item);
  //   }
  // });
  // return numberArr.sort((a,b) => a - b);

  //With Filter
  // return arr.filter(element => typeof element == 'number');

  }

  console.log(sortAges(arrCase1));
  console.log(sortAges(arrCase2));
 




/* ======= TESTS ===== */
test=(arr, expectedArr)=>{
  let actualArr =sortAges(arr);
  if(actualArr.length === expectedArr.length){
    let final=[];
    for(let i=0; i<actualArr.length; i++){
      if(actualArr[i]===expectedArr[i]){
        final.push("passed");
      }else{
        return "failed";
      }
    }
    return final.length === actualArr.length? 'passed':"failed";
  }
}
let expectedArr1 = [23, 45, 55, 66, 100];
let expectedArr2 = [55, 60, 100];
let expectedArr3 = [55, 60, 101];

console.log(test(arrCase1, expectedArr1));
console.log(test(arrCase2, expectedArr2));
console.log(test(arrCase2, expectedArr3));