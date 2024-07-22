function sumNums(firstNum, secondNum) {
    let sum = 0;
    let allNums = "";

    for (
        let currentNumber = firstNum;
        currentNumber <= secondNum;
        currentNumber += 1
      ) {
        allNums += `${currentNumber} `;
        sum += currentNumber;
      }
    
      console.log(allNums.trim());
      console.log(`Sum: ${sum}`);
}

sumNums(5, 10)