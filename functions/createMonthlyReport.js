import {convertDate} from "./convertDate";

export function createMonthlyReport(startDateItem, endDateItem, cards) {
    let startDate = convertDate(`${startDateItem} 00:00:00`);
    let endDate = convertDate(`${endDateItem} 00:00:00`);
    let arrayData = [];
    let arrayObjects = [];
    let arrayDataValues = [];
    let arrayDataLabels = [];

    for (let key in cards) {
        let dateComponents = cards[key].date.split(".");
        let itemDate = new Date(dateComponents[1], dateComponents[0], dateComponents[2], '00', '00', '00').getTime();
        let itemDateYear = dateComponents[2];
        let itemDateMount = dateComponents[1];
        arrayData.push([itemDateYear, itemDateMount, cards[key].money, itemDate]);
    }

    for (let i = 0; i < arrayData.length; i++) {
        if(arrayData[i].length < 5) {
            for (let j = i + 1; j < arrayData.length; j++) {
                if(arrayData[i][0] === arrayData[j][0] && arrayData[i][1] === arrayData[j][1] && arrayData[j].length < 5) {
                    arrayData[i][2] = (Number(arrayData[i][2]) + Number(arrayData[j][2])).toFixed(2);
                    arrayData[j].push("true");
                }
            }
            arrayObjects.push({dateY: arrayData[i][0], dateM: arrayData[i][1], money: arrayData[i][2], date: arrayData[i][3]});
        }
    }

    arrayObjects.forEach(function(item) {
        if (item.date >= startDate && item.date <= endDate) {
            arrayDataValues.push(item.money);
            arrayDataLabels.push(`${item.dateM}.${item.dateY}`);
        }
    })

    return [arrayDataLabels, arrayDataValues];
}
