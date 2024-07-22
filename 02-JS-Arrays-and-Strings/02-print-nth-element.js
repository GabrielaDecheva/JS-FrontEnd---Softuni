function printElement(arr, step) {
    newArr = []

    // for(let i = 0; i < arr.length; i+=step) {
    //         newArr.push(arr[i])
    // }

    arr.forEach((element, index) => {
        if (index % step === 0) {
            newArr.push(arr[index]);
        }
    });

    return newArr
}



result = printElement(['5', 
    '20', 
    '31', 
    '4', 
    '20'], 
    2)

console.log(result)

// function printEveryNthElement(arr, step) {
//     return (arr.filter((_, i) => i % step === 0));
// }