/*

Your task is to sort a given string. Each word in the string will contain a single number.
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string.
The words in the input String will only contain valid consecutive numbers.

Examples:

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/



//My Solution

function order(words) {

    const wordsArray = words.split(" ");
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newArray = new Array(wordsArray.length);

    wordsArray.forEach(word => {

        for (let i = 0; i < word.length; i++) {

            const letter = word.charAt(i);

            if (numbersArray.includes(Number(letter))) {

                let index = Number(letter) - 1;
                newArray.splice(index, 1, word);

            }

        }

    });

    return newArray.join(" ");

}

// Best Solution 1

function order(words) {

    return words.split(' ').sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}


// Best solution 2

var reg = /\d/;

function order(words){
  return words.split(' ').sort(comparator).join(' ');
}

function comparator(word, nextWord) {
  return +word.match(reg) - +nextWord.match(reg)
}