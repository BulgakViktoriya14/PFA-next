export function validateDates(dateStart, dateEnd) {
    return convertDate(`${dateStart} 00:00:00`) < convertDate(`${dateEnd} 00:00:00`);
}

export function convertDate(date) {
    let arr = date.split(/[- :]/);
    date = new Date(arr[0], Number(arr[1])-1, arr[2], arr[3], arr[4], arr[5]).getTime();
    return date;
}
