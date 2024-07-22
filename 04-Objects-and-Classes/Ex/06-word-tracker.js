function findWords(wordsArr) {
    const [searchedWords, ...rest] = wordsArr;
    const separatedWords = searchedWords.split(" ").reduce((acc, word) => {
        acc[word] = 0;
        return acc
    }, {})

    rest.forEach((word) => {
        if (separatedWords.hasOwnProperty(word)) {
            separatedWords[word] += 1;
        }
    });

    Object.keys(separatedWords)
        .sort((a, b) => separatedWords[b] - separatedWords[a])
        .forEach((word) => console.log(`${word} - ${separatedWords[word]}`));

}

findWords([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])