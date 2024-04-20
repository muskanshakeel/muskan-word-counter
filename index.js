#! /usr/bin/env node
import inquirer from "inquirer";
// Declare a constant answers and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentenceto count the word: "
    }
]);
const words = answers.Sentence.trim().split(" ");
// print the array of words to the console
console.log(words);
// print the word count of the Sentence to the console
console.log(`Your sentence word count is ${words.length}`);
