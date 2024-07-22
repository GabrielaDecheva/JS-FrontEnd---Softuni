function loadingBar(number) {
    if(number === 100) {
        console.log("100% Complete!")
        console.log("[%%%%%%%%%%]")
        return
    }

    let percents = "%".repeat(number/10);
    let dots = ".".repeat((100 - number)/10);
    console.log(`${number}% [${percents}${dots}]`)
    console.log("Still loading...")
}

loadingBar(100)


// function printLoadingBar(percents) {
//     const maxPercents = 100;
  
//     function printLoadedMessage() {
//       console.log("100% Complete!");
//       console.log("[%%%%%%%%%%]");
//     }
  
//     function printLoadingMessage(loadedPercents, percentCount, dotCount) {
//       const loadingState = `${"%".repeat(percentCount)}${".".repeat(dotCount)}`;
//       console.log(`${loadedPercents}% [${loadingState}]`);
//       console.log("Still loading...");
//     }
  
//     if (percents === maxPercents) {
//       printLoadedMessage();
//       return;
//     }
  
//     const maxSymbols = 10;
//     const percentSymbolCount = parseInt(maxPercents * (percents * 0.001));
//     const dotSymbolCount = maxSymbols - percentSymbolCount;
  
//     printLoadingMessage(percents, percentSymbolCount, dotSymbolCount);
//   }
  
//   printLoadingBar(30);
//   console.log(" ");
//   printLoadingBar(50);
//   console.log(" ");
//   printLoadingBar(90);
  