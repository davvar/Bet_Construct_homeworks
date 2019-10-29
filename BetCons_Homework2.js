function reverseNum(num) {
  return ("" + num)
    .split("")
    .reverse()
    .join("");
}

//////////////////////////////////////////////////

function alphabeticalOrder(str) {
  return str
    .split("")
    .sort()
    .join("");
}

//////////////////////////////////////////////////

function firstLettersToUpperCAse(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

//////////////////////////////////////////////////

function longestWord(str) {
  let longest = "";
  str
    .split(" ")
    .forEach((word) =>
      word.length > longest.length ? (longest = word) : longest
    );
  return longest;
}

/////////////////////////////////////////////////////

function findingVowels(str){
    return str.replace(/[^ieuao]/g, '').length
}

