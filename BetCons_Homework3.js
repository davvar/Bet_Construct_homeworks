let SOME = (arr, callback) => {
  for (let index in arr) if (callback(arr[index], index, arr)) return true;
  return false;
};

let EVERY = (arr, callback) => {
  for (let index in arr) if (!callback(arr[index], index, arr)) return false;
  return true;
};

let MAP = (arr, callback) => {
  let newArr = [];
  for (let index in arr) newArr = [...newArr, callback(arr[index], index, arr)];

  return newArr;
};

let FILTER = (arr, callback) => {
  let newArr = [];
  //adding only after callback returns 'true'
  for (let index in arr)
    callback(arr[index], index, arr) && (newArr = [...newArr, arr[index]]);

  return newArr;
};

let FIND = (arr, callback) => {
  let found;
  for (let index in arr) {
    callback(arr[index], index, arr) && (found = arr[index]);
    break; //returning the first found
  }

  return found;
};

let users = [
  { name: "davit", age: 25 },
  { name: "vardan", age: 28 },
  { name: "davit", age: 30 }
];






// 
// console.group('Array.find VS FIND')
// console.log('users', users);
// console.log("users.find(({ name }) => name === 'davit')", users.find(({ name }) => name === "davit"));
// console.log("FIND(users, ({ name }) => name === 'davit')", FIND(users, ({ name }) => name === "davit"));











// let SORT = (arr, callback) => {
    //   if (!callback) {
    //     let newArr = [];
    //     let firstDigs = [];
    //     for (let el of arr) firstDigs = [...firstDigs, (el + "")[0]];
    
    //     let firstBiggestDigit = Math.max(...firstDigs);
    //     let prevDigit = 0;
    //     for (let el of arr) {
    //       if ((el + "")[0] > prevDigit && (el + "")[0] < firstBiggestDigit) {
    //         prevDigit = (el + "")[0];
    //         newArr.push(el)
    //       }
    //       if((el + "")[0] > prevDigit && (el + "")[0] ===  firstBiggestDigit)
    //       newArr = [...newArr, el]
    //     }
    
    //     return newArr;
    //   }
    // };
    
    // console.log("sort:", [1, 88, 2, 69, 441, 5].sort());
    // console.log("SORT", SORT([1, 88, 2, 69, 441, 5]));
    