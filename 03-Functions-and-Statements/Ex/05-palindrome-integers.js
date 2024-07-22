function palindrome(numArr){
    let output = [];
    for(let num of numArr) {
        let currentNum = num.toString().split("").reverse();
        output.push("true"? num === Number(currentNum.join("")):"false");
    }

    console.log(output.join("\n"))
}

palindrome([32,2,232,1010]);


// function findPalindromeNumbers(numbersArr) {
//     function determinateIsNumberAPalindrome(number) {
//         const reversedNumber = Number(number.toString().split("").reverse().join(""));
//         return number === reversedNumber;
//     }
    
//     numbersArr.forEach((number) => {
//         console.log(determinateIsNumberAPalindrome(number));
//     });
// }

// findPalindromeNumbers([123,323,421,121]);