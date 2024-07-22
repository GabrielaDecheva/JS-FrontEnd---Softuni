function charsInRange(first, second) {

    function getCharsNum(stringOne, stringTwo) {
        const firstCharNum = stringOne.charCodeAt(0);
        const secondCharNum = stringTwo.charCodeAt(0);

        return [firstCharNum, secondCharNum]
    }

    function getRange(firstNum, secondNum) {
        const arrLength = Math.abs(firstNum - secondNum);
        const minNum = Math.min(firstNum, secondNum) + 1;
        const charsArr = new Array(arrLength - 1).fill(0).map((_, i) => String.fromCharCode(minNum + i));

        return charsArr
    }


    const [firstNum, secondNum] = getCharsNum(first, second);

    const outputChars = getRange(firstNum, secondNum);
    console.log(outputChars.join(" "));

}

charsInRange("a", "d")