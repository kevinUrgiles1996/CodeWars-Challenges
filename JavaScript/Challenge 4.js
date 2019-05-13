/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized. */

/*
    Examples

    toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

    toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

*/

function toCamelCase(str){
    
    let finalWord = "";
    const isDash = str.includes("-");
    const words = isDash ? str.split("-") : str.split("_");

    words.forEach(word => {
        finalWord += word.charAt(0).toUpperCase() + word.slice(1)
    });

    return str.charAt(0) + finalWord.slice(1);

}

function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }