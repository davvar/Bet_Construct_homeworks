const min = (...nums) => Math.min(...nums);
//-----------------------------------------------------------------------//
const getDecimal = num => +`${num}`.slice(`${num}`.indexOf(".") + 1);
//-----------------------------------------------------------------------//
const ucFirst = str =>
  [...str]
    .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter))
    .join("");
//-----------------------------------------------------------------------//
const checkSpam = str => str.toLowerCase().includes("xxx".toLowerCase());
//-----------------------------------------------------------------------//
const truncate = (str, maxlength) =>
  str.length > maxlength
    ? `${str.slice(0, maxlength - str.length - 3)}...`
    : str;
//-----------------------------------------------------------------------//
const isEmpty = obj => {
  for (let prop in obj) if (obj.hasOwnProperty(prop)) return true;
  return false;
};
//-----------------------------------------------------------------------//
const multiplyNumeric = obj => {
  for (let prop in obj) if (typeof obj[prop] === "number") obj[prop] *= 2;
  return obj;
};
//-----------------------------------------------------------------------//
const find = (arr, value) => arr.indexOf(value);
//-----------------------------------------------------------------------//
const filterRange = (arr, a, b) => arr.filter(num => num > a && num < b);
//-----------------------------------------------------------------------//
const camelize = str =>
  str
    .replace(/_/g, "-") //works for both "-" and "_"
    .split("-")
    .map((word, i) => (i === 0 ? word : ucFirst(word)))
    .join("");
//-----------------------------------------------------------------------//
//shakes array elements in random order
const randomOrder = (val, nextVal) => {
  val = typeof val === "number" ? val : val.length;
  nextVal = typeof nextVal === "number" ? nextVal : nextVal.length;

  return Math.random() > 0.5 ? val - nextVal : nextVal - val;
};
let arr = [345,742,422,7,'fas',[3423,1],{},[],'1','aaa']
// console.log(arr.sort(randomOrder));
//-----------------------------------------------------------------------//
const getSums = arr => {
  let sumsArr = [];

  arr.reduce((prev, curr) => {
    sumsArr.push(prev + curr);
    return (prev += curr);
  }, 0);
  return sumsArr;
};
//-----------------------------------------------------------------------//
const getLastDayOfMonth = (year, month) => {
  let milisecsInOneDay = 86400000;
  let thisMonth = new Date(year, month - 1); //months start from 1 not 0
  let nextMonth = new Date(year, month);
  return Math.floor((nextMonth - thisMonth) / milisecsInOneDay);
};
//-----------------------------------------------------------------------//

