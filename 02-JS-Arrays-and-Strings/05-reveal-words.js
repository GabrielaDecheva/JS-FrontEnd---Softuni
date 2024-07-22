function revealWords(words, sentence) {
    const arrWords = words.split(", ");
    changedString = sentence
    arrWords.forEach((element) => {
        let searched = "*".repeat(element.length);
        changedString = changedString.replace(searched, element)
    });

    console.log(changedString);

}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')