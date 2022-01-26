import {convertDate} from "./convertDate";
import {findCards} from "./findCards";

export function createDailyReport(startDateItem, endDateItem, cards) {
    let startDate = convertDate(`${startDateItem} 00:00:00`);
    let endDate = convertDate(`${endDateItem} 00:00:00`);
    let arrayData = [];
    let arrayObjects = [];
    let arrayDataValues = [];
    let arrayDataLabels = [];
    let arrayCards = [];

    for (let key in cards) {
        let dateComponents = cards[key].date.split('.');
        let itemDate = convertDate(`${dateComponents[2]}-${Number(dateComponents[1])}-${dateComponents[0]} 00:00:00`);
        arrayData.push([itemDate, cards[key].money, cards[key].date, cards[key].id]);
    }

    for (let i = 0; i < arrayData.length; i++) {
        let cardsArrayID = [];
        if (arrayData[i].length < 5) {
            cardsArrayID.push((arrayData[i][3]));
            arrayData[i].push("true");
            for (let j = i + 1; j < arrayData.length; j++) {
                if (arrayData[i][0] === arrayData[j][0] && arrayData[j].length < 5) {
                    arrayData[i][1] = (Number(arrayData[i][1]) + Number(arrayData[j][1])).toFixed(2);
                    cardsArrayID.push(arrayData[j][3]);
                    arrayData[j].push("true");
                }
            }

            arrayObjects.push({date: arrayData[i][0], money: arrayData[i][1], label: arrayData[i][2], cardsArray: cardsArrayID});
        }
    }

    arrayObjects.sort((a, b) => a.date > b.date ? 1 : -1);

    arrayObjects.forEach(function (item, id) {
        if (item.date >= startDate && item.date <= endDate) {
            arrayDataValues.push(item.money);
            arrayDataLabels.push(item.label);
            arrayCards.push(findCards(item.cardsArray, cards));
        }
    })

    return [arrayDataLabels, arrayDataValues, arrayCards];
}
