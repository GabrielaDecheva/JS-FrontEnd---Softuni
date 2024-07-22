function solve(jsonInput) {
    let data = JSON.parse(jsonInput);

    Object
        .keys(data)
        .forEach(key => {
            console.log(`${key}: ${data[key]}`);
        });
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
