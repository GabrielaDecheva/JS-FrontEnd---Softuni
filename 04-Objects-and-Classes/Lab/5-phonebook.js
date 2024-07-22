function solve(input) {
    let phonebook = {};

    for (const entry of input) {
        let [name, phone] = entry.split(' ');

        phonebook[name] = phone;
    }

    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
}

function fancySolve(input) {
    let result = input
        .map(entry => entry.split(' '))
        .reduce((phonebook, [name, phone]) => {
            phonebook[name] = phone;

            return phonebook;
        }, {});

    for (const name in result) {
        console.log(`${name} -> ${result[name]}`);
    }
}

fancySolve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);
