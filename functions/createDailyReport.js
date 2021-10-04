import {convertDate} from "./convertDate";

export function createDailyReport(startDateItem, endDateItem, cards) {
    let startDate = convertDate(`${startDateItem} 00:00:00`);
    let endDate = convertDate(`${endDateItem} 00:00:00`);
    let arrayData = [];
    let arrayObjects = [];
    let arrayDataValues = [];
    let arrayDataLabels = [];

    for (let key in cards) {
        let dateComponents = cards[key].date.split('.');
        let itemDate = convertDate(`${dateComponents[2]}-${dateComponents[1]}-${dateComponents[0]} 00:00:00`);
        arrayData.push([itemDate, cards[key].money, cards[key].date]);
    }

    for (let i = 0; i < arrayData.length; i++) {
        if(arrayData[i].length < 4) {
            for (let j = i + 1; j < arrayData.length; j++) {
                if (arrayData[i][0] === arrayData[j][0] && arrayData[j].length < 4) {
                    arrayData[i][1] = (Number(arrayData[i][1]) + Number(arrayData[j][1])).toFixed(2);
                    arrayData[j].push("true");
                }
            }

            arrayObjects.push({date: arrayData[i][0], money: arrayData[i][1], label: arrayData[i][2]});
        }
    }

    arrayObjects.forEach(function(item) {
        if (item.date >= startDate && item.date <= endDate) {
            arrayDataValues.push(item.money);
            arrayDataLabels.push(item.label);
        }
    })

    return [arrayDataLabels, arrayDataValues];
}
