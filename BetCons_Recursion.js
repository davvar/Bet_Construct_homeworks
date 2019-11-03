//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
const factorialOf = (num) => {
  if (num === 1 || num === 0) return 1;
  // -5! = -120 , 5! = 120
  return num < 0 ? num * factorialOf(num + 1) : num * factorialOf(num - 1);
};
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
const greatestCommonDivisor = (...nums) => {
  if (nums.includes(0)) throw new Error('"0" has no divider');

  let dividers = [];
  let divider = 1;

  return (function() {
    if (nums.some((num) => num < divider)) return Math.max(...dividers);
    // num % divider === 0 is falsey so with "!" making it true
    if (nums.every((num) => !(num % divider))) dividers.push(divider);

    divider++;
    //arguments.callee is name of this function
    return arguments.callee();
  })();
};
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
const rangeOfIntegers = (num1, num2) => {
  if (num1 > num2) [num1, num2] = [num2, num1]; //swapping values
  let output = [];

  return (function() {
    if (num1 === num2 - 1) return output;

    output.push(num1 + 1);
    num1++;
    return arguments.callee();
  })();
};
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
const sumOfArray = (arr) => {
  if (arr.length === 0) return 0;
  let result = arr.pop();

  return result + sumOfArray(arr);
};
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
const mergeSort = (arr) => {
  let newArr = [];
  let indexOfSmallestNum = arr.indexOf(Math.min(...arr));

  if (!arr.length) return newArr;
  //putting the smallest num into newArr
  //and simultaneously removing from old one
  newArr = [...arr.splice(indexOfSmallestNum, 1)];

  return [...newArr, ...mergeSort(arr)];
};







console.group("factorialOf(num)");
console.log("factorialOf(5) :", factorialOf(5));
console.log("factorialOf(-5) :", factorialOf(-5));
console.log("factorialOf(0) :", factorialOf(0));
console.log("factorialOf(1) :", factorialOf(1));
console.groupEnd();

console.log("");

console.group("greatestCommonDivisor(...nums)");
console.log("greatestCommonDivisor(4,80) :", greatestCommonDivisor(4, 80));
console.log("greatestCommonDivisor(12,80) :", greatestCommonDivisor(12, 80));
console.log(
  "greatestCommonDivisor(10,20,30,40) :",
  greatestCommonDivisor(10, 20, 30, 400)
);
console.groupEnd();

console.log('');

console.group("rangeOfIntegers(...nums)");
console.log("rangeOfIntegers(70, 80) :", rangeOfIntegers(75, 80));
console.log("rangeOfIntegers(10, 5) :", rangeOfIntegers(10, 5));
console.groupEnd();
console.log('');
console.group("sumOfArray(arr)");
console.log("sumOfArray([75, 80,345,6]) :", sumOfArray([75, 80, 345, 6]));
console.log("sumOfArray([-10, 5]) :", sumOfArray([-10, 5]));
console.groupEnd();
console.log('');

console.group("mergeSort(arr)");
console.log(
  "mergeSort([75, 80, -85, -2, 345, 6] :",
  mergeSort([75, 80, -85, -2, 345, 6])
);
console.groupEnd();