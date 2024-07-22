function solve(city) {
    let cityKeys = Object.keys(city);

    for (const key of cityKeys) {
        console.log(`${key} -> ${city[key]}`);
    }
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
}
);

// Using iligal indifier characters
let someObj = {
    first_name: 'Pesho',
    _internalProp: 'SomeVAl',
    $special: 'asldjkhasd',
    'last-name': 'Petrov',
}

// access iligal characters in property name
console.log(someObj['last-name']);

