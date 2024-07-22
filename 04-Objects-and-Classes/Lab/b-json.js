let cat = {
    name: 'Navcho',
    age: 9,
    breed: 'Persian',
};

// Convert object to json
let catJSON = JSON.stringify(cat);

console.log(catJSON);

// Converty json to object
let convertedCat = JSON.parse(catJSON);

// Add indentation to json
let catJsonWithIndentation = JSON.stringify(cat, null, 2);
console.log(catJsonWithIndentation);
