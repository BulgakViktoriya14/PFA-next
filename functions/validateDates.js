export function validateDates(dateStart, dateEnd) {
    // let startDateComponents = dateStart.split("-");
    // let endDateComponents = dateEnd.split("-");
    // let startDateItem = new Date(`${startDateComponents[1]} ${startDateComponents[2]} ${startDateComponents[0]}`).getTime();
    // let endDateItem = new Date(`${endDateComponents[1]} ${endDateComponents[2]} ${endDateComponents[0]}`).getTime();

    return convertDate(`${dateStart} 00:00:00`) < convertDateForIos(`${dateEnd} 00:00:00`);

    // if(isNaN(startDateItem)) {
    //     return convertDateForIos(`${dateStart} 00:00:00`) < convertDateForIos(`${dateEnd} 00:00:00`);
    // } else {
    //     alert(startDateItem < endDateItem);
    //     return startDateItem < endDateItem;
    // }
}

function convertDate(date) {
    let arr = date.split(/[- :]/);
    date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]).getTime();
    alert(`date: ${arr}` + date)
    return date;
}
