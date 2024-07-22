function oddOccurances(input) {
    const string = input.split(" ").reduce((acc, word) => {
        const currentWord = word.toLowerCase();
        if(!acc.hasOwnProperty(currentWord)){
            acc[currentWord] = 0
        }

        acc[currentWord] += 1;

        return acc
    }, {});

    console.log(
        Object.keys(string)
          .filter((key) => string[key] % 2 !== 0)
          .join(" ")
      );
}

oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')