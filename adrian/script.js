//1
function add(integer) {
  let sum = 0;
  let i = 0;
  while (i <= integer) {
    sum += i;
    i++;
  }
  return sum;
}
// console.log(add(600));

//2
function sumOfCubes(a, b, c) {
  let arrayOfnumbers = Array.from(arguments);
  let sumOfCubes = 0;
  for (let i = 0; i < arrayOfnumbers.length; i++) {
    sumOfCubes += arrayOfnumbers[i] ** 3;
  }
  return sumOfCubes;
}
// console.log(sumOfCubes(1, 5, 9));

//3
function isStrInWord(substring, word) {
  return word.includes(substring);
}
// console.log(isStrInWord("bu", "button"));

//4
function isLEQZero(number) {
  return number === 0 ? true : false;
}
// console.log(isLEQZero(10));

//5
function countOccurrences(string, letter) {
  let ocurrences = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) ocurrences++;
  }
  return ocurrences;
}
// console.log(countOccurrences("this is a string", "i"));

//6
function calcBaseToExponent(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return calcBaseToExponent(base, exponent - 1) * base;
  }
}
// console.log(calcBaseToExponent(5, 5));

//7 This one is repeated, the two previous ones too.
function calcDogAge(number) {
  return `Your doggo is ${number * 7} years old in human years!`;
}
// console.log(calcDogAge(4));

// 8 This one is repeated too.

// 9
function isWaldoHere(string) {
  return string.includes("Waldo");
}
// console.log(isWaldoHere("is there wal here ?"));

//10
function isEqualSlices(totalSlices, numberPeople, slicesPerPerson) {
  return totalSlices / numberPeople >= slicesPerPerson ? true : false;
}
// console.log(isEqualSlices(11, 5, 3));
// console.log(isEqualSlices(8, 3, 2));
// console.log(isEqualSlices(8, 3, 3));
// console.log(isEqualSlices(24, 12, 2));

//11
function isEqualNumXandO(string) {
  let loweredString = string.toLowerCase();
  let numberXs = 0;
  let numberOs = 0;
  for (let i = 0; i < string.length; i++) {
    if (loweredString[i] === "x") numberXs++;
    if (loweredString[i] === "o") numberOs++;
  }
  return numberXs === numberOs;
}
// console.log(isEqualNumXandO("ooxx"));
// console.log(isEqualNumXandO("xooxx"));
// console.log(isEqualNumXandO("ooxXm"));
// console.log(isEqualNumXandO("zpzpzpp"));
// console.log(isEqualNumXandO("zzoo"));

//12
function isPrime(number) {
  if (number === 2) return true;

  for (let count = 2; count <= Math.floor(Math.sqrt(number)); count++) {
    if (number % count === 0) return false;
  }
  return true;
}
// console.log(isPrime(7));
// console.log(isPrime(9));
// console.log(isPrime(10));

//13
function validateEmail(string) {
  if (
    !string.includes("@") ||
    !string.includes(".") ||
    string.includes(".@") ||
    string.includes("@.") ||
    string.includes("..") ||
    string[string.length - 1] === "." ||
    string[0] === "@" ||
    !string.includes(".", string.indexOf("@"))
  ) {
    return false;
  } else {
    return true;
  }
}
console.log(validateEmail("john@.email.com"));
