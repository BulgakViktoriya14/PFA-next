import {convertDate} from "./convertDate";

export function createMonthlyReport(startDateItem, endDateItem, cards) {
    let startDate = convertDate(`${startDateItem} 00:00:00`);
    let endDate = convertDate(`${endDateItem} 00:00:00`);
    let arrayData = [];
    let arrayObjects = [];
    let arrayDataValues = [];
    let arrayDataLabels = [];
    let arrayCards = [];

    for (let key in cards) {
        let dateComponents = cards[key].date.split(".");
        let itemDate = convertDate(`${dateComponents[2]}-${dateComponents[1]}-${dateComponents[0]} 00:00:00`);
        let itemDateYear = dateComponents[2];
        let itemDateMount = dateComponents[1];
        arrayData.push([itemDateYear, itemDateMount, cards[key].money, itemDate, cards[key].id]);
    }

    for (let i = 0; i < arrayData.length; i++) {
        let cardsArrayID = [];
        if(arrayData[i].length < 6) {
            for (let j = i + 1; j < arrayData.length; j++) {
                if(arrayData[i][0] === arrayData[j][0] && arrayData[i][1] === arrayData[j][1] && arrayData[j].length < 6) {
                    arrayData[i][2] = (Number(arrayData[i][2]) + Number(arrayData[j][2])).toFixed(2);
                    cardsArrayID.push(arrayData[i][4]);
                    arrayData[j].push("true");
                }
            }
            arrayObjects.push({dateY: arrayData[i][0], dateM: arrayData[i][1], money: arrayData[i][2], date: arrayData[i][3], cardsArray: cardsArrayID});
        }
    }

    arrayObjects.forEach(function(item) {
        if (item.date >= startDate && item.date <= endDate) {
            arrayDataValues.push(item.money);
            arrayDataLabels.push(`${item.dateM}.${item.dateY}`);
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
