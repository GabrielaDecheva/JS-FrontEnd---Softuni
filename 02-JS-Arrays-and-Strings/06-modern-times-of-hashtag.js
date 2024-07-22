function solve(sentence) {
    const pattern = /#{1}[A-Za-z]+/gm;
    const result = sentence.matchAll(pattern);
    for (const word of result) {
        console.log(word[0].substring(1));
    }

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')