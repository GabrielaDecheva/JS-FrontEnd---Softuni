function matrix(number) {
    let currentNumber = number;
    const separator = " "
    while( currentNumber > 0) {
        console.log(`${number}${separator}`.repeat(number))
        currentNumber -= 1
    }
}

matrix(7)

// function printNxNMatrix(x) {
//     const getNumberNTimes = (number, separator = " ") => {
//       return `${number}${separator}`.repeat(number).trim();
//     };
  
//     for (let row = 0; row < x; row++) {
//       console.log(getNumberNTimes(x));
//     }
//   }
  
//   printNxNMatrix(2);