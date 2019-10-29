function getRandomInt(min, max) {
  if (min > max) [min, max] = [max, min]; // swapping values

  let res = parseInt(Math.random() * ((min + max) / 2));
  return res >= min && res <= max ? res : getRandomInt(min, max);
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

let getRandomHexadecimalColor = () => `#${parseInt(Math.random() * 1000000)}`;

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function isEqual(value1, value2) {
  if (
    value1 === undefined ||
    value2 === undefined ||
    typeof value1 !== typeof value2
  )
    return false;

  if (value1 === value2) return true;

  let result;
  value1 = Object.entries(value1);
  value2 = Object.entries(value2);

  if (value1.length === value2.length) {
    for (let i in value1) {
      result = value1[i][0] === value2[i][0] && value1[i][1] === value2[i][1];
    }
    return result;
  }
  return false;
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function classNameOf(value) {
  if (typeof value === "object" && value !== null)
    return Array.isArray(value) ? "Array" : "Object";

  if (value === null) return "Null";

  let output = (typeof value)[0].toUpperCase() + (typeof value).slice(1);
  return output;
}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function generateGuid(hyphen){
  let alphabet = ['a','b','c','d','e','f','g','h','j','k','l','v','m','n','o','p','q','r','s','t','x','w','z']
  let result =''
  for (let i = 0; i < 32; i++) {
    let num = Math.floor(Math.random() * 10)
    if(hyphen){
      i === 8 && (result += hyphen);
      i === 12 && (result += hyphen)
      i === 16 && (result += hyphen)
      i === 20 && (result += hyphen)
    }
    result += num > 4 ? num : alphabet[Math.floor(Math.random() * (alphabet.length - 1))]
  }
  return result
}








// console.group("getRandomInt(min, max)");
// console.log("getRandomInt(-10, -20) :", getRandomInt(-10, -20));
// console.log("getRandomInt(-30, -20) :", getRandomInt(-30, -20));
// console.log("getRandomInt(25, -60) :", getRandomInt(25, -60));
// console.log("getRandomInt(0, 80) :", getRandomInt(0, 80));
// console.groupEnd();

// console.log("");
// console.log("");

// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////

// console.group("getRandomHexadecimalColor()");
// console.log("getRandomHexadecimalColor() :", getRandomHexadecimalColor());
// console.log("getRandomHexadecimalColor() :", getRandomHexadecimalColor());
// console.log("getRandomHexadecimalColor() :", getRandomHexadecimalColor());
// console.log("getRandomHexadecimalColor() :", getRandomHexadecimalColor());
// console.groupEnd();

// console.log("");
// console.log("");

// console.group('isEqual(value1, value2)')
// console.log('isEqual("5", 5) :',isEqual('5', 5));
// console.log('isEqual(5, 5) :',isEqual(5, 5));
// console.log('isEqual({a: 2},{b: 2}) :',isEqual({a: 2},{b: 2}));
// console.log('isEqual({name:5,age:44 },{name:5, age:44}) :',isEqual({ name: 5, age: 44 }, { name: 5, age: 44 }));
// console.log('isEqual({name:5,age:"44"},{name:5, age:44}) :',isEqual({ name: 5, age: "44" }, { name: 5, age: 44 }));
// console.log('isEqual({name:5,age:"44",car:"aaa"},{name:5,age:44}) :',isEqual({ name: 5, age: "44", car: "aaa" }, { name: 5, age: 44 }));
// console.groupEnd();


// console.log('');
// console.log('');

console.group("classNameOf(value)");
console.log("classNameOf(null) :", classNameOf(null));
console.log("classNameOf(function() {}) :", classNameOf(function() {}));
console.log("classNameOf([]) :", classNameOf([]));
console.log("classNameOf({}) :", classNameOf({}));
console.log("classNameOf(9) :", classNameOf(9));
console.log('classNameOf("hello") :', classNameOf("hello"));
console.log("classNameOf(true) :", classNameOf(true));
console.groupEnd();

console.log('');
console.log('');

console.group("generateGuid(hyphen) ");
console.log("generateGuid('-')");
console.log('  ',generateGuid('-'));
console.log("generateGuid('_') :");
console.log('  ',generateGuid('_'));
console.log("generateGuid('/') :");
console.log('  ',generateGuid('/'));
console.log('generateGuid() :');
console.log('  ',generateGuid());
console.groupEnd()
