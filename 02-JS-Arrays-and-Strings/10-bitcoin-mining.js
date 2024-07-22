function bitcoinMining(goldArr) {
    const bitcoinPrice = 11949.16;
    const gramOfGoldPrice = 67.51;
    let totalAmount = 0;
    let boughtBitcoins = 0;
    let firstPurchase = []
    let currentDay = 0;
    for (let gold of goldArr) {
        currentDay += 1
        if (currentDay % 3 === 0){
            gold *= 0.7
        }
        totalAmount += gold * gramOfGoldPrice;
        if (totalAmount >= bitcoinPrice) {
            let bitcoinsTobuy = Math.floor(totalAmount / bitcoinPrice)
            boughtBitcoins += bitcoinsTobuy;
            totalAmount -= bitcoinsTobuy * bitcoinPrice;
            firstPurchase.push(currentDay);
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoins}`)
    if (boughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchase[0]}`)
    }
    console.log(`Left money: ${totalAmount.toFixed(2)} lv.`)
}

bitcoinMining([3124.15, 504.212, 2511.124])