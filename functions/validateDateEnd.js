export function validateDateEnd(dateEnd) {
    let endDateComponents = dateEnd.split("-");
    let endDateItem = new Date(`${endDateComponents[1]} ${endDateComponents[2]} ${endDateComponents[0]}`).getTime();
    let currentDate = new Date().getTime();
    return currentDate > endDateItem;
}