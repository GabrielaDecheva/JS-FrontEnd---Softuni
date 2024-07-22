function storeProvision(inStockProducts, orderedProducts) {
    function generateObjectData(inputArr) {
      return new Array(inputArr.length / 2).fill({}).reduce((acc, curr, i) => {
        const product = inputArr[i + i];
        const quantity = Number(inputArr[i + i + 1]);
  
        if (!curr[product]) {
          curr[product] = 0;
        }
  
        curr[product] += quantity;
  
        return Object.assign(acc, curr);
      }, {});
    }
  
    const inStock = generateObjectData(inStockProducts);
    const ordered = generateObjectData(orderedProducts);
  
    const allProducts = structuredClone(inStock);
  
    Object.keys(ordered).forEach((productName) => {
      if (!allProducts[productName]) {
        allProducts[productName] = 0;
      }
  
      allProducts[productName] += ordered[productName];
    });
  
    Object.entries(allProducts).forEach(([key, value]) => {
      console.log(`${key} -> ${value}`);
    });
}


storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])