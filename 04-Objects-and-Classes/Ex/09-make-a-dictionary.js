function dictionary(jsonString) {
    const finalDict = {};
    for (const json of jsonString) {
        const object = JSON.parse(json);

        for (const key of Object.keys(object)) {
            finalDict[key] = object[key];
        }
    }
     const sortedDict = Object.keys(finalDict).sort((a,b) => a.localeCompare(b));

     for (const term of sortedDict) {
        const definition = finalDict[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
     }
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])