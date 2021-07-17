var stockData = {
    "stock1": [1,2,3,4,5,6,7,8,9,10],
    "stock2": [10,9,8,7,6,5,4,3,2,1],
    "stock3": [1,4,2,5,7,4,6,3,6,7],
    "stock4": [1,4,2,5,3,6,4,7,5,8]
}


// function simpleMovingAverages(stock, window = 5) {
//     let arrayOfPrices = stockData[stock];
//     if (!arrayOfPrices || arrayOfPrices.length < window) {
//         return [];
//     }

//     let index = 0;
//     const simpleMovingAverages = [];

//     while (index < (window - 1)) {
//         simpleMovingAverages.push(null);
//         index = index + 1;
//     }

//     index = window;
//     while (index < (arrayOfPrices.length + 1)) {
//         const windowSlice = arrayOfPrices.slice(index-window, index);
//         const sum = windowSlice.reduce((prev,curr) => prev + curr, 0);
//         simpleMovingAverages.push(sum/window);
//         index = index + 1;
//     }

//     return simpleMovingAverages;
// }

function predictNextValue(values, window = 10, predictionWindow = 2) {
    if (!values || values.length < window) {
        return [];
    }

    let stockPrices = values;

    let index = window;
    const predictedValues = [];

    for (var i = 0; i < predictionWindow; i++) {
        const windowSlice = stockPrices.slice(index-window, index);

        var change = 0;
        
        for (var j = 1; j < window; j++) {
            change = change + (windowSlice[j] - windowSlice[j-1]);
        }
        predictedChange = change/(window-1);
        nextValue = windowSlice[window-1]+predictedChange;
        if (nextValue < 0) {
            nextValue = 0;
        }
        predictedValues.push(nextValue);
        stockPrices.push(nextValue);
        index = index + 1;
    }

    return predictedValues;
}