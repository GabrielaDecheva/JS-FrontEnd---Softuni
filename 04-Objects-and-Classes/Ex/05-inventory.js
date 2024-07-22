function heroes(heroesArr) {
    const heroInfo = heroesArr.reduce((acc, curr) =>{
        const [name, level, items] = curr.split(" / ");
        acc.push({
            name,
            level,
            items,
        })
        return acc
    }, [])
    
    const sortedHeroes = heroInfo.sort((a, b) => a.level - b.level);
    heroInfo.forEach(hero => {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    });
}

heroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])