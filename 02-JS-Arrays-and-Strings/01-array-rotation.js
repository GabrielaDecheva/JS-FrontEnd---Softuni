function arrayRotation(numbers, rotations) {
    while (rotations > 0 ) {
        movedNumber = numbers.shift()
        numbers.push(movedNumber)
        rotations -= 1
    }

    console.log(numbers.join(" "))
}

arrayRotation([2, 4, 15, 31], 5)


// // function arrayRotation (arr, rotations) {
//     const cutOffIndex = rotations % arr.length;
//     const leftSide = arr.slice(0, cutOffIndex);
//     const rightSide = arr.slice(cutOffIndex);
//     const resultArr = rightSide.concat(leftSide);
//     console.log(resultArr.join(" "));
// }