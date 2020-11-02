// Create a function that takes an integer as an argument.Add up all the integers from 1 to the integer you passed to the function.For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
const additionManipulation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};

console.log(additionManipulation(13));

// Create a function that takes in three numbers and returns the sum of its cubes.

const sumOfCubes = function (num1, num2, num3) {
  if (typeof num1 === typeof 1) {
    num1 = Math.pow(num1, 3);
  } else {
    num1 = 0;
  }

  if (typeof num2 === typeof 1) {
    num2 = Math.pow(num2, 3);
  } else {
    num2 = 0;
  }

  if (typeof num3 === typeof 1) {
    num3 = Math.pow(num3, 3);
  } else {
    num3 = 0;
  }

  sum = num1 + num2 + num3;
  return sum;
};

console.log(sumOfCubes());

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
const isStrStartOfWord = function (str, word) {
  let bool;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === word[i]) {
      bool = true;
    } else {
      bool = false;
      break;
    }
  }
  return bool;
};

console.log(isStrStartOfWord("bit", "button"));

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
const isLEQZero = function (num) {
  let result;
  if (num <= 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

console.log(isLEQZero(-2));

// 5 ==>
function countOccurrence(string, letter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrence("this is a string", "i"));

// 6 ==>
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.
const createPowerOfNum = function (num) {
  let newNum = num ** num;
  return newNum;
};
console.log(`Power of`, createPowerOfNum(3));

// 7 ==>
function toDoggieYears(age) {
  age = age * 7;
  return `Your doggo is ${age} years olf in humans years!`;
}

console.log(toDoggieYears(8));

//8 ==>
function lifetimeSupply(age, amountPerDay) {
  let maxAge = 80;
  let sum = maxAge - Math.round(age);
  console.log(sum);
  let amountPerYear = 365 * amountPerDay;
  console.log(amountPerYear);
  let supply = amountPerYear * sum;
  return supply;
}

console.log(lifetimeSupply(25, 2));

// Create a function that takes a string and returns true if Waldo is found, and false if he's not.
const isWaldoHere = function (string) {
  let waldo = "waldo";
  if (string.toLowerCase().includes(waldo)) {
    return true;
  } else {
    return false;
  }
};

console.log(isWaldoHere("hello WAldo!"));

// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
const isEqualSlice = function (numOfSlices, numOfPeeps, howMany) {
  let amount = numOfPeeps * howMany;
  if (numOfSlices >= amount) {
    return true;
  } else {
    return false;
  }
};

console.log(`equal slice ==> `, isEqualSlice(8, 3, 2));

// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
const sameAmountXO = function (string) {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase().includes("x")) {
      xCount++;
    }
  }

  for (let x = 0; x < string.length; x++) {
    if (string[x].toLowerCase().includes("o")) {
      oCount++;
    }
  }

  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
};

console.log(sameAmountXO("oOxoxX"));

// Create a function that returns true if a number is prime and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
const isPrime = function (num) {
  if (num === 2) {
    return true;
  } else if (num === 1 || num < 1) {
    return false;
  } else if (num > 2) {
    let isTrue;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isTrue = true;
        break;
      }
    }

    if (isTrue === true) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

console.log("is pirme ==> ", isPrime(121));

// Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.
const isValidEmailAddress = function (email) {
  if (
    email.includes("@") &&
    email.includes(".") &&
    email[email.length - 1] !== "."
  ) {
    let atThenI = "";
    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@" || email[i] === ".") {
        atThenI = atThenI.concat(email[i]);
      }
    }

    console.log(atThenI);

    if (atThenI.includes("@.")) {
      let emailManipulation = email.split("@.");
      let emailManipulation2 = email.split(".@");
      if (emailManipulation.length > 1 || emailManipulation2.length > 1) {
        return `Not valid`;
      } else {
        let emailManipulation3 = email.split("@");
        if (emailManipulation3[0] === "") {
          return `Not valid`;
        } else {
          if (email.includes("..")) {
            return "Not valid";
          } else {
            return `Valid email`;
          }
        }
      }
    } else {
      return `Not valid`;
    }
  } else {
    return `Not valid`;
  }
};

console.log(isValidEmailAddress("john.smith@SpeechGrammarList.com"));
