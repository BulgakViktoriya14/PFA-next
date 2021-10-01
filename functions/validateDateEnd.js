export function validateDateEnd(dateEnd) {
    let endDateComponents = dateEnd.split("-");
    let endDateItem = new Date(`${endDateComponents[1]} ${endDateComponents[2]} ${endDateComponents[0]}`).getTime();
    let currentDate = new Date().getTime();

    console.log(currentDate)

    if(isNaN(endDateItem)) {
        return currentDate > convertDateForIos(endDateItem);
    } else {
        return currentDate > endDateItem;
    }
}

function convertDateForIos(date) {
    let arr = date.split(/[- :]/);
    date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]).getTime();
    alert('date: '+date)
    return date;
}
