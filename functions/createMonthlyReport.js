export function createMonthlyReport(startDateItem, endDateItem, cards) {
    let startDateComponents = startDateItem.split("-");
    let endDateComponents = endDateItem.split("-");
    let startDate = new Date(`${startDateComponents[1]} ${startDateComponents[2]} ${startDateComponents[0]}`).getTime();
    let endDate = new Date(`${endDateComponents[1]} ${endDateComponents[2]} ${endDateComponents[0]}`).getTime();
    let arrayData = [];
    let arrayObjects = [];
    let arrayDataValues = [];
    let arrayDataLabels = [];

    for (let key in cards) {
        let dateComponents = cards[key].date.split(".");
        let itemDate = new Date(`${dateComponents[1]} ${dateComponents[0]} ${dateComponents[2]}`).getTime();
        let itemDateYear = dateComponents[2];
        let itemDateMount = dateComponents[1];
        arrayData.push([itemDateYear, itemDateMount, cards[key].money, itemDate]);
    }

    for (let i = 0; i < arrayData.length; i++) {
        if(arrayData[i].length < 5) {
            for (let j = i + 1; j < arrayData.length; j++) {
                if(arrayData[i][0] === arrayData[j][0] && arrayData[i][1] === arrayData[j][1] && arrayData[j].length < 5) {
                    arrayData[i][2] = Number(arrayData[i][2]) + Number(arrayData[j][2]);
                    arrayData[j].push("true");
                    console.log(arrayData[i][0], arrayData[i][1])
                }
            }
            arrayObjects.push({dateY: arrayData[i][0], dateM: arrayData[i][1], money: arrayData[i][2], date: arrayData[i][3]});
            console.log(arrayObjects)
        }
    }

    arrayObjects.forEach(function(item) {
        console.log(item)
        if (item.date >= startDate && item.date <= endDate) {
            arrayDataValues.push(item.money);
            arrayDataLabels.push(`${item.dateM}.${item.dateY}`);
        }
        console.log(arrayDataValues, arrayDataLabels);
    })

    return [arrayDataLabels, arrayDataValues];
}