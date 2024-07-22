function fruit(typeFruit, weightInGrams, pricePerKg) {
    const weightInKg = weightInGrams / 1000;
    const totalSum = weightInKg * pricePerKg
    console.log(`I need $${totalSum.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeFruit}.`);
}

fruit('orange', 2500, 1.80)