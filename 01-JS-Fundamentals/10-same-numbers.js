function sameNumbers(number) {
    const sourceOfTruth = number % 10;
    let currentNumber = number;
    let isSame = true;
    let sum = 0;
  
    while (currentNumber > 0) {
      const currentDigit = currentNumber % 10;
      if (currentDigit !== sourceOfTruth) {
        isSame = false;
      }
      sum += currentDigit;
  
      currentNumber = parseInt(currentNumber / 10);
    }
  
    console.log(isSame);
    console.log(sum);
}

sameNumbers(22222)