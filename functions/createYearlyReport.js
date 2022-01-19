export function createYearlyReport(startDateItem, endDateItem, cards) {
    let startDateComponents = startDateItem.split("-");
    let endDateComponents = endDateItem.split("-");
    let startDate = Number(startDateComponents[0]);
    let endDate = Number(endDateComponents[0]);
    let arrayData = [];
    let arrayObjects = [];
    let arrayDataValues = [];
    let arrayDataLabels = [];
    let arrayCards = [];

    for (let key in cards) {
        let dateComponents = cards[key].date.split(".");
        let itemDate = dateComponents[2];
        arrayData.push([itemDate, cards[key].money, cards[key].id]);
    }

    for (let i = 0; i < arrayData.length; i++) {
        let cardsArrayID = [];
        if(arrayData[i].length < 4) {
            for (let j = i + 1; j < arrayData.length; j++) {
                if(arrayData[i][0] === arrayData[j][0] && arrayData[j].length < 4) {
                    arrayData[i][1] = (Number(arrayData[i][1]) + Number(arrayData[j][1])).toFixed(2);
                    cardsArrayID.push(arrayData[i][2]);
                    arrayData[j].push("true");
                }
            }
            arrayObjects.push({date: arrayData[i][0], money: arrayData[i][1], cardsArray: cardsArrayID});
        }
    }

    arrayObjects.forEach(function(item) {
        if (item.date >= startDate && item.date <= endDate) {
            arrayDataValues.push(item.money);
            arrayDataLabels.push(item.date);
            arrayCards.push(findCards(item.cardsArray));
        }
    })

    function findCards(array) {
        let resultArray = [];
        for (let key in cards) {
            array.forEach(function (item) {
                if(cards[key].id === item) {
                    resultArray.push(cards[key])
                }
            })
        }
        return resultArray;
    }

    return [arrayDataLabels, arrayDataValues, arrayCards];
}
