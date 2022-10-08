/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create a function that prints the string "Hello World"
 */

// function print() {
//     console.log("Hello World");
// }

// print();

/*
 * Prompt 02:
 *
 * Create a function that takes a single parameter and logs it to the console.
 */

// function parameter(x) {
//     console.log(`this is the parameter: ${x}`)
// }

// parameter("Hello World")

/*
 * Prompt 03:
 *
 * Create a function that takes a parameter name and prints the string "Hello
 * Zakk", if 'Zakk' is passed in as the name argument.
 */

// function print(e) {
//     if (e == "Zakk") {
//         console.log(`Hello ${e}`);
//     } else {
//         console.log("nope")
//     }
// }

// const name = "Zakk"
// print(name)

/*
 * Prompt 04:
 *
 * Write a function printCool that accepts one parameter, name as an argument.
 * The function should print the name and a message saying that that person is
 * cool.
 *
 * i.e. printCool("Captain Reynolds") // => "Captain Reynolds is cool."
 */

// function printCool(e) {
//     console.log(`${e} is cool.`);
// }

// printCool('Todd')

/*
 * Prompt 05:
 *
 * Write a function calculateCube that takes a single number and prints the
 * volume of a cube made from that number:
 *
 * i.e. calculateCube(5) // => 125
 */

// function calculateCube(e) {
//     let cube = e**3;
//     console.log(cube);
// }

// calculateCube(3);

/*
 * Prompt 06:
 *
 * Write a function isAVowel that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise. The vowel could be upper
 * or lower case.
 *
 * i.e. isAVowel("a"); // => true
 */

// function isAVowel(e) {
//     if (e == "a" || e == "e" || e == "i" || e == "o" || e == "u") {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }    

// isAVowel("u")

/*
 * Prompt 07:
 *
 * Create a function that takes a string as a parameter and returns a reversed
 * version of the string (using the reverse method):
 *
 * Bonus: Use an arrow function
 */

// const reverseString = (e) => {
//     console.log(e);
//     let reversed = e.split("").reverse().join("");
//     console.log(reversed);
// }

// reverseString("Todd")

/*
 * Prompt 08:
 *
 * Write a function getTwoLengths that accepts two parameters (strings). The
 * function should return an array of numbers where each number is the length of
 * the corresponding string.
 *
 * i.e. getTwoLengths("Hank", "Hippopopalous"); // => [4, 13]
 */

// const getTwoLengths = (a, b) => {
//     let array = [];
//     console.log(array);
//     array.push(a.length);
//     array.push(b.length);
//     console.log(array);
// };

// getTwoLengths("todd", "Allyson")

/*
 * Prompt 09:
 *
 * Write a function getMultipleLengths that accepts a single parameter as an
 * argument: an array of strings. The function should return an array of numbers
 * where each number is the length of the corresponding string.
 *
 * i.e. getMultipleLengths(["hello", "what", "is", "up", "dude"]); // => [5, 4, 2, 2, 4]
 */

// const getMultipleLengths = (e) => {
//     let numbers = [];
//     for (let i = 0; i < e.length; i++) {
//         numbers.push(e[i].length);
//     }
//     console.log(numbers)
// };

// getMultipleLengths(["todd", "ally", "austin"]);

/*
 * Prompt 10:
 *
 * Define a function maxOfThree that takes three numbers as arguments and
 * returns the largest of them. If all numbers are the same, it doesn't matter
 * which one is returned. If the two largest numbers are the same, one of them
 * should be returned.
 *
 * i.e. maxOfThree(6, 9, 1); // => 9
 */

// const maxOfThree = (a, b, c) => {
//     if (a == b && a == c) {
//         console.log(a)
//     } else if (a == b && a !== c) {
//         console.log(a)
//     } else if (b == c && b !== a) {
//         console.log(b)
//     } else if (a > b && a > c ) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//     }
// };

// maxOfThree(1, 8, 8)

/*
 * Prompt 11:
 *
 * Write a function printLongestWord that accepts a single argument, an array of
 * strings. The method should return the longest word in the array. In case of
 * a tie, the method should return the word that appears first in the array.
 *
 * i.e. printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]); // => "Peanutbutter"
 */

// const printLongestWord = (e) => {
//     let longestWord = "";
//     for (let i = 0; i < e.length; i++) {
//         if (longestWord.length < e[i].length) {
//             longestWord = e[i];
//         }
//     }
// }

// printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]);

/*
 * Prompt 12:
 *
 * Create a function that takes a string as a parameter and returns the
 * uppercase version of the string (using the toUpperCase) method.
 *
 * Bonus: Use an arrow function
 */

// const uppercase = (e) => {
//     let word = e.toUpperCase();
//     console.log(word);
// }

// uppercase("lowercase")

/*
 * Prompt 13:
 *
 * Write a function that takes a sentence as a parameter and returns the words
 * in the sentence in reverse order.
 */

// const reverseSentence = (e) => {
//     let backwards = e.split(" ").reverse();
//     console.log(backwards)
// }

// reverseSentence("say this backwards")

/*
 * Prompt 14:
 *
 * Write a function that takes a phone number (as a number) and returns
 * a formatted string. So if the number 2025171777 is pass in, the string
 * '(202) 517-1777' will be returned
*/

const phoneNumber = (e) => {
    //checking to make sure there is anything
    if (!e) {
        console.log("Please Enter Your Number");
    };
    // gets rid of all characters that are not numbers
    // const phoneNumber = e.replace(/[^d]/g, '');
    console.log(e.length)
}

phoneNumber(5596797311)
