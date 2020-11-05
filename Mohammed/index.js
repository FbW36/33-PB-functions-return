// 1.

function addNumberComponent(nc)
{
    let sum = 0;

    for (let i=1; i<= nc; i++)
    {
        sum += i;
    }

    return sum;
}

let nc = 5;
console.log(`Ex. No. 1: The summation components of the number ${nc} is ==> ${addNumberComponent(nc)} `);

// ========================================================

// 2.

let numberArray = [1, 2, 3];

let cubicCalculation = function(numberArray)
{
    let cubicNumbersSum = 0;

    for (let i=0; i<numberArray.length; i++)
    {
        cubicNumbersSum += Math.pow(numberArray[i], 3);
    }

    return cubicNumbersSum;
}

console.log(`Ex. No. 2: The cubic sum of the given array numbers [${numberArray}] is ==> ${cubicCalculation(numberArray)}`);

// ==========================================================

// 3.

let theStr = 'button';
let theWord = 'bu';

function isWordAtBeginningOfString(theStr, theWord)
{
    let flag = false;

    let tempStr= theStr.slice(0, theWord.length );
    
    if (  tempStr === theWord  )
    {
        flag = true;
    }
    else
    {
        flag = false;
    }

    return flag;
}

console.log(`Ex. No. 3: The word "${theWord}" is included at the beginning of the string "${theStr}" ==> ${isWordAtBeginningOfString(theStr, theWord)}` );

// =================================================================

// 4.

function checkNumber(no)
{
    let flag = false;

    if (no <= 0)
    {
        flag = true;
    }
    else
    {
        flag = false;
    }

    return flag;
}

let no;
console.log(`Ex. No. 4: checkNumber(5) --> ${checkNumber(0)}`);

// ====================================================================

// 5. 

let strInput ='this is a string';
let countedLetter = 'i';

function occurrenceCount(strInput, countedLetter)
{
    let occurrenceCounter = 0;

    occurrenceCounter = strInput.split('i').length-1;
    return occurrenceCounter;
}

console.log(`Ex. No. 5: The letter "${countedLetter}" occurs inside the string "${strInput}" ==> ${occurrenceCount(strInput, countedLetter)} times`);

// =====================================================================

// 6.

let baseNo = 2;
let exponentialNo = 5;

let exponentialCalculator = (baseNo, exponentialNo) => Math.pow(baseNo, exponentialNo);

console.log(`Ex. No. 6: The exponential value of the numbers ${baseNo} and ${exponentialNo} is ==> ${exponentialCalculator(baseNo, exponentialNo)}`);

// =================================================================

// 7.

let dogAge;

let dogAgeCalculator = dogAge => dogAge * 7;

console.log( `Ex. No. 7: dogAgeCalculator(7) ==> Your dog is ${dogAgeCalculator(7)} years old based on human years`);

// ==========================================================

// 8.

let noOfChocoPiecesPerDay = 2;
let currentAge = 25;
let ageLimitedAt =80;
let yearsOfChocoConsumptions = ageLimitedAt - currentAge;

let chocoConsumptionCalc = (currentAge, noOfChocoPiecesPerDay) => noOfChocoPiecesPerDay * yearsOfChocoConsumptions * 365;

console.log(`Ex. No. 8: chocoConsumptionCalc(25, 2) -> You will need ${chocoConsumptionCalc(currentAge, noOfChocoPiecesPerDay)} pieces of chocolate (${noOfChocoPiecesPerDay} a day) to last you till the age of ${ageLimitedAt}`);

// ====================================================================

// 9.

let mainStr = "";

let isWaldoHere = function(mainStr)
{   
    mainStr = mainStr.toLowerCase();
    let searchedWord = "Waldo".toLowerCase();

    let flag;
    
    if (mainStr.includes(searchedWord))
    {
        flag = true;
    }
    else
    {
        flag = false;
    }

    return flag;
}

console.log(`Ex. No. 9: isWaldoHere("I found you Waldo!"): ${isWaldoHere('"I found you Waldo!"')}`);

// =======================================================================

// 10.

let totalNoOfSlices = 8;
let recipients = 4;
let slicesPerPerson = 2;

let isEqualSlices = (totalNoOfSlices, recipients, slicesPerPerson) => recipients * slicesPerPerson === totalNoOfSlices;

if ( isEqualSlices(totalNoOfSlices, recipients, slicesPerPerson) ) 
{
    console.log(`Ex. No. 10: isEqualSlices(${totalNoOfSlices}, ${recipients}, ${slicesPerPerson}) ==> ${isEqualSlices(15, 5, 3)}`);
}
else
{
    console.log(`Ex. No. 10: isEqualSlices(${totalNoOfSlices}, ${recipients}, ${slicesPerPerson}) ==> ${isEqualSlices(totalNoOfSlices, recipients, slicesPerPerson)}`);
}

// ========================================================================

// 11.

let x_counter = 0;
let o_counter = 0;

let checkStr = 'oxOmX';

let isEqualNumXandO = function(checkStr)
{
    let tempStr = checkStr.toLowerCase();
    let flag;

    for (let i=0; i<tempStr.length; i++)
    {
        if (tempStr[i] === 'o' )
        {
            o_counter +=1;
        } 
        else if ( tempStr[i] == 'x')
        {
            x_counter +=1;
        }
    }

    if ( o_counter === x_counter )
    {
        flag = true;
    }
    else
    {
        flag = false;
    }

    return flag;
}

console.log(`Ex. No. 11: isEqualNumXandO(${checkStr}) ==> ${isEqualNumXandO(checkStr)}`);

// ========================================================================

// 12.

let number = 7;

function isPrime(number)
{
    let flag = true;
    counter = 0;

    for (let i=1; i<=number; i++)
    {
        if (number % i === 0)
        {
            counter +=1;
        }
    }
    
    if (counter > 2 )
    {
        flag = false;
    }

    return flag;
}

if (isPrime(number))
{
    console.log(`Ex. No. 12: isPrime(${number}) ==> ${isPrime(number)}`);
}
else
{
    console.log(`Ex. No. 12: isPrime(${number}) ==> ${isPrime(number)}`);
}

// ==================================================================

// 13.

function validateEmail(string) 
{
    if ( !string.includes("@") ||
         !string.includes(".") ||
         string.includes(".@") ||
         string.includes("@.") ||
         string.includes("..") ||
         string[string.length - 1] === "." ||
         string[0] === "@" ||
         !string.includes(".", string.indexOf("@"))
       ) 
       {
            return false;
       }    
       else 
       {
            return true;
       }
}

console.log(validateEmail("j@example.com"));
