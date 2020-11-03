// 1
function sumIntFrom1ToN(num) {
  let sum = 0;
  for (x = 1; x <= num; x++) {
    sum = sum + x;
  }
  return sum;
}
console.log(sumIntFrom1ToN(4));
console.log(sumIntFrom1ToN(13));
console.log(sumIntFrom1ToN(600));

// 2
function sumOfCubes(a, b, c) {
  if (typeof a == undefined) {
    a = null;
  } else if (typeof b == undefined) {
    b = null;
  } else if (typeof c == undefined) {
    c = null;
  } else return a ** 3 + b ** 3 + c ** 3;
}
console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(null, null, null));

// 3
function isStrInWord(a, b) {
  return b.includes(a) == true ? true : false;
}
console.log(isStrInWord("bu", "button"));
console.log(isStrInWord("tri", "triplet"));
console.log(isStrInWord("beau", "pastry"));

// 4
function isLEQZero(x) {
  return x <= 0 == true;
}
console.log(isLEQZero(3));
console.log(isLEQZero(0));
console.log(isLEQZero(-4));
console.log(isLEQZero(10));

// 5
function countOccurrences(str, letter) {
  let strArr = str.split("");
  let counter = 0;
  for (i = 0; i <= str.length; i++) {
    if (str[i] == letter) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countOccurrences("this is a string", "i"));

// 6
function calcBaseToExponent(a, b) {
  return Math.abs(a) ** Math.abs(b);
}
console.log(calcBaseToExponent(5, 5));
console.log(calcBaseToExponent(10, 10));
console.log(calcBaseToExponent(3, 3));

// 7
function dogAge(age) {
  return age * 7;
}
console.log(dogAge(5));

// 8
function calcLifetimeSupply(a, b) {
  return (80 - a) * 365 * b;
}
console.log(calcLifetimeSupply(25, 2));
console.log(calcLifetimeSupply(40, 3));

// 9
function isWaldoHere(str) {
  if (str.toLowerCase().includes("waldo")) {
    return true;
  } else return false;
}
console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found your Waldo!"));
console.log(isWaldoHere("Iw wally here?"));
console.log(isWaldoHere("waldo is here?"));

// 10
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
function isEqualSlices(num, peo, sli) {
  if (peo * sli <= num) {
    return true;
  }
  return false;
}
console.log(isEqualSlices(11, 5, 3));
console.log(isEqualSlices(8, 3, 2));
console.log(isEqualSlices(8, 3, 3));
console.log(isEqualSlices(24, 12, 2));

// 11
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
function isEqualNumXandO(param) {
  xC = 0;
  oC = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i].toLowerCase().includes("o")) {
      oC = oC + 1;
    } else if (param[i].toLowerCase().includes("x")) {
      xC = xC + 1;
      console.log("xC=", xC);
    }
  }
  if (oC == xC) {
    return true;
  }
  return false;
}

//console.log("o Counter = x Counter?", isEqualNumXandO("ooxx"));
//console.log("o Counter = x Counter?", isEqualNumXandO("xooxx"));
//console.log("o Counter = x Counter?", isEqualNumXandO("ooxXm"));
//console.log("o Counter = x Counter?", isEqualNumXandO("zpzpzpp"));
console.log("o Counter = x Counter?", isEqualNumXandO("zzoo"));

// 12
function isPrime(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
      return true;
    }
}
console.log(isPrime(7));
//console.log(isPrime(9));
//console.log(isPrime(10));

// 13
function validateEmail(email) {
  if (
    // * The string must contain exactly one "@" character.
    !email.includes("@") ||
    email.indexOf("@") > 0 ||
    //  * The string must contain at least one "." character.
    !email.includes(".") ||
    email.indexOf(".") !== 0 ||
    //  * e.g. "." cannot be the last character.
    email.lastIndexOf(".") !== email.length - 1 ||
    email.indexOf("@") !== 0 ||
    email.lastIndexOf("@") !== email.length - 1 ||
    //  * e.g. there cannot be consecutive "." characters
    email.includes("..") ||
    //  * The "." and the "@" must be in the appropriate places.
    email.includes("@@") ||
    //  * e.g. "." cannot be directly before or after "@"
    email.includes("@.") ||
    email.includes(".@")
    //  * e.g. "@" must have at least one character in front of it.
    // haven't check this one
  ) {
    return false;
  }
  return true;
}
console.log(validateEmail("john@email.com"));
