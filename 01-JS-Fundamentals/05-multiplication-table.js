function multiply(number) {
    
    for (
        let currentNum = 1;
        currentNum <= 10;
        currentNum += 1
    ) {
        console.log(`${number} X ${currentNum} = ${number * currentNum}`);
    }
}

multiply(2)