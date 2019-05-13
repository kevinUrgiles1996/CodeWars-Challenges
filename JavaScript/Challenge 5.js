/* Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched.*/

/* 

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

// My solution

function pigIt(str) {

    let finalWord = "";
    const wordsArray = str.split(" ");

    wordsArray.forEach(word => {

        let isCharacter = word === "?" || word === "!";
        finalWord += (isCharacter ? word : word.slice(1) + word.charAt(0) + "ay") + " ";

    });

    return finalWord.slice(0, finalWord.length - 1);

}

// Best Solutions

function pigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
        return w.slice(1) + w[0] + 'ay';
    });
}