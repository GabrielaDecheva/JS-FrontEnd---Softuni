function substring(word, sentence) {
    const words = sentence.split(" ");
    for (let element of words) {
        if (element.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            return;  // Exits the function if the word is found
        }
    }
    console.log(`${word} not found!`);
}

substring('python',
'JavaScript is the best programming language')
substring('javascript',
'JavaScript is the best programming language')

// function stringSubstring(specialWord, text) {
//     const regex = new RegExp(`\\b${specialWord}\\b`, "i");
//     const result =  text.match(regex);
//     if(result !== null) {
//         console.log(specialWord)
//     } else {
//         console.log(`${specialWord} not found!`);
//     }
// }