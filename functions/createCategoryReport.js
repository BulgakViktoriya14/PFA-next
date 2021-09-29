export function createCategoryReport(startDateItem, endDateItem, cards) {
    let startDateComponents = startDateItem.split("-");
    let endDateComponents = endDateItem.split("-");
    // let startDate = new Date(`${startDateComponents[1]} ${startDateComponents[2]} ${startDateComponents[0]}`).getTime();
    // let endDate = new Date(`${endDateComponents[1]} ${endDateComponents[2]} ${endDateComponents[0]}`).getTime();
    let startDate = new Date(startDateItem).toISOString().split('T')[0];
    let endDate = new Date(endDateComponents).toISOString().split('T')[0];
    console.log(startDate, endDate)
    let arrayData = [];
    let arrayObjects = [];
    let arrayDataValues = [];
    let arrayDataLabels = [];

    document.querySelector(".report-container").insertAdjacentHTML('beforeend',`<p>${startDate}</p>`)
    document.querySelector(".report-container").insertAdjacentHTML('beforeend', `<p>${endDate}</p>`)

    for (let key in cards) {
        if (cards[key].category) {
            let dateComponents = cards[key].date.split(".");
            let itemDate = new Date(`${dateComponents[1]} ${dateComponents[0]} ${dateComponents[2]}`).getTime();
            arrayData.push([itemDate, cards[key].money, cards[key].category]);
        }
    }

    for (let i = 0; i < arrayData.length; i++) {
        if (arrayData[i].length < 4) {
            for (let j = i + 1; j < arrayData.length; j++) {
                if (arrayData[i][2].toLowerCase().trim() === arrayData[j][2].toLowerCase().trim() && arrayData[j].length < 4) {
                    arrayData[i][1] = (Number(arrayData[i][1]) + Number(arrayData[j][1])).toFixed(2);
                    arrayData[j].push("true");
                }
            }
            arrayObjects.push({date: arrayData[i][0], money: arrayData[i][1], label: arrayData[i][2]});
        }
    }

    arrayObjects.forEach(function (item) {
        if (item.date >= startDate && item.date <= endDate) {
            arrayDataValues.push(item.money);
            arrayDataLabels.push(item.label);
        }
    })

    return [arrayDataLabels, arrayDataValues];
}
