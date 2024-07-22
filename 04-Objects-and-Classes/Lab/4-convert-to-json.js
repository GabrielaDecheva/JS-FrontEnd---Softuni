function solve(firstName, lastName, hairColor) {
    let info = {
        name: firstName,
        lastName,
        hairColor,
    };

    let result = JSON.stringify(info);

    console.log(result);
}

solve('George', 'Jones', 'Brown');
