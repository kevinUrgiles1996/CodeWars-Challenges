// Challenge 1 - Code Wars

/*
    Write a function printValidNumbers(num1, num2) that lets a user enter 2 numbers. 
    
    Those numbers are considered min and max of a range with wich a list must be generated.
    Ex (num1:5, num2: 10) => [5,6,7,8,9,10] Note that max number is included.

    The program must return a list of numbers that accomplish the following sum property:

    Ex 89 = (8)^1 + (9)^2 = 8 + 81 = 89 
    Ex 135 = (1)^1 + (3)^2 + (5)^3 = 1 + 9 + 125 = 135

    Examples:

    printValidNumbers(1,10) => [1,2,3,4,5,6,7,8,9]
    printValidNumbers(20,50) => []
    printValidNumbers(100,200) => [135,175]

*/

const generateRange = (min, max) => {

    const numbersArray = [];
    for (let i = min; i <= max; i++) numbersArray.push(i);
    return numbersArray;
    
}


let verifySumProperty = (num) => {

    const originalNumber = num;
    const cifras = [];
    let cantidad = 0;

    while (num !== 0) {

        cifras.push(num % 10);
        num = Math.trunc(num / 10);

    }

    cifras.reverse();

    for (let i = 0; i < cifras.length; i++) {
        cantidad += Math.pow(cifras[i], i + 1);
    }

    return cantidad === originalNumber;

};

const printValidNumbers = (num1, num2) => {

    const numbers = generateRange(num1, num2);
    const validNumbers = [];

    numbers.forEach( number => {

        if (verifySumProperty(number)) validNumbers.push(number);

    });

    return validNumbers;

}

console.log(printValidNumbers(100,200));
