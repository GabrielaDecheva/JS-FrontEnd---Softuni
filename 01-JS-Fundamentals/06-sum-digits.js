function sumDigits(number) {
    const numAsString = number.toString();
    let sum = 0;

    for (let index = 0; index < numAsString.length; index += 1) {
        sum += Number(numAsString[index]);
    }
    console.log(sum);
}

sumDigits(543)


// function sumDigits(number) {
//   console.log(
//     number
//       .toString()
//       .split("")
//       .map(Number)
//       .reduce((a, b) => a + b, 0)
//   );
// }

// function sumDigits(number) {
//     let sum = 0;
  
//     let currentNumber = number;
  
//     while (currentNumber > 0) {
//       sum += currentNumber % 10;
//       currentNumber = parseInt(currentNumber / 10);
//     }
//     console.log(sum);
//   }