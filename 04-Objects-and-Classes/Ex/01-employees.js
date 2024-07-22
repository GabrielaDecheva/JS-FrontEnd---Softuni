function employees(nameList) {
    const nameObject = {};
    for(const name in nameList) {
        nameObject[nameList[name]] = nameList[name].length;

    }

    for(const key in nameObject) {
        console.log(`Name: ${key} -- Personal Number: ${nameObject[key]}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])


    // function storeEmployees(input) {
    //     input
    //       .reduce((acc, name) => {
    //         acc.push({
    //           name,
    //           personalNumber: name.length,
    //         });
      
    //         return acc;
    //       }, [])
    //       .forEach((employee) => {
    //         console.log(
    //           `Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`
    //         );
    //       });
    //   }