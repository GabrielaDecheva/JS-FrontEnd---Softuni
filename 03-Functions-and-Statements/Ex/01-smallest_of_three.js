function smallestNumber(first, second, third) {
    const numberArr = [first, second, third];
    const sortedArr = numberArr.sort((a,b) => a-b);
    console.log(sortedArr[0])
}

smallestNumber(600, 342, 123)