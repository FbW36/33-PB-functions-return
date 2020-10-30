//1
function sumIntFrom1ToN(num) {
  let result = 0;
  if (Number.isInteger(num)) {
    for (i = 1; i <= num; i++) {
      result += i;
    }
    return result;
  } else {
    return "Not an integer";
  }
}

console.log("1==>", sumIntFrom1ToN(600));

//2
function sumOfCubes(num1, num2, num3) {
  let result = Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
  return result;
}
console.log("2==>", sumOfCubes(1, 5, 9));

//3
function stringCheck(string, word) {
  return word.startsWith(string) ? true : false;
}

console.log("3==>", stringCheck("beau", "pastry"));

//4
function lessZero(num) {
  if (typeof num === "number") {
    return num <= 0 ? true : false;
  } else {
    return "Not a number";
  }
}
console.log("4==>", lessZero(-4));

//5
function countOccurrences(string, letter) {
  let occurrences = 0;
  const stringArray = string.split("");
  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === letter) {
      occurrences += 1;
    } else {
      occurrences += 0;
    }
  }
  return occurrences;
}

console.log("5==>", countOccurrences("this is a string", "i"));

//6
function calcBaseToExponent(base, exponent) {
  return Math.pow(base, exponent);
}
console.log("6==>", calcBaseToExponent(10, 10));

//7 it's the same as in 31

//8 it's the same as in 31

//9
function isWaldoHere(string) {
  return string.includes("?") || string.includes("not") ? false : true;
}

console.log("9==>", isWaldoHere("waldo is not here"));

//10
function isEqualSlices(numSlices, numRecipients, slicesPerPerson) {
  return numRecipients * slicesPerPerson > numSlices ? false : true;
}

console.log("10==>", isEqualSlices(24, 12, 2));

//11
function isEqualNumXandO(string) {
  const stringArray = string.split("");
  let numO = 0;
  let numX = 0;
  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "x" || stringArray[i] === "X") {
      numX += 1;
    } else if (stringArray[i] === "o" || stringArray[i] === "O") {
      numO += 1;
    } else {
      numX += 0;
      numO += 0;
    }
  }
  return numX === numO ? true : false;
}

console.log("11==>", isEqualNumXandO("ooxXm"));

//12
function isPrime(num) {
  if (num % num === 0 && num % 1 === 0) {
    let result = 0;
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        result += 1;
      } else {
        result += 0;
      }
      console.log("result==>", result);
    }
    return result > 0 ? false : true;
  } else {
    return false;
  }
}

console.log("12==>", isPrime(7));

//13

function isEmail(mail) {
  let indexAt = mail.indexOf("@");

  // loop for number of @ occurrences
  const emailArray = mail.split("");
  let occurrencesAt = 0;
  for (i = 0; i < emailArray.length; i++) {
    if (emailArray[i] === "@") {
      occurrencesAt += 1;
    }
  }
  // The string must contain exactly one "@" character
  if (occurrencesAt > 1 || occurrencesAt <= 0) {
    return false;
  }
  //"." cannot be the last character.
  else if (mail.charAt(mail.length - 1) === ".") {
    return false;
  }
  //"." cannot be directly before or after "@"
  else if (
    indexAt === mail.indexOf(".") + 1 ||
    indexAt === mail.indexOf(".") - 1
  ) {
    return false;
  }
  //there cannot be consecutive "." characters
  else if (mail.includes("..")) {
    return false;
  }
  // "@" must have at least one character in front of it.
  else if (mail.charAt(0) === "@") {
    return false;
  }
  // The string must contain at least one "." character.
  //"john.smith@com" is invalid while "john.smith@email.com" is valid.
  else if (mail.includes(".") && mail.includes(".", indexAt)) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmail("john@email.com"));
