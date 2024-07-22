function towns(townsArray) {
    const townInfo = townsArray.reduce((array, currentValue) => {
        const [town, latitude, longitude] = currentValue.split(" | ");
        array.push({
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        })

        return array
    }, [])

    townInfo.forEach((town) => {
        console.log(town);
      });
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )