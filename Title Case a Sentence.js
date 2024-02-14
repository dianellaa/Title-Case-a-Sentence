function titleCase(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
}

// Test cases
console.log(titleCase("I'm a little tea pot"));  // Output: "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt"));       // Output: "Short And Stout"



/*
1.Define the titleCase function that takes a sentence string as input.
2.Declare an array excludedWords containing words that should not be converted to lowercase.
3.Convert the entire sentence to lowercase using the toLowerCase() method and
split it into an array of words using the split(" ") method. Assign the result to the variable words.
4.Iterate over each word in the words array using a loop.
Inside the loop, check if the current word is not included in the excludedWords array using the includes() method.
If the word is not in the excludedWords array:
Capitalize the first letter of the word by accessing its first character with words[i][0], 
converting it to uppercase with toUpperCase(), and concatenating it with the rest of the word sliced from the second character onward using slice(1).
 Assign the modified word back to the words[i].
If the word is in the excludedWords array:
Capitalize the first letter of the word as before.
Repeat this process for each word in the array.
5.Join the modified words array into a single string using the join(" ") method, with a space as the separator.
6. Return the resulting string.
That's the step-by-step algorithm for the provided JavaScript code to title-case a sentence while also capitalizing connecting words like "the" and "of".*/