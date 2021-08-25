export function validateDates(dateStart, dateEnd) {
    let startDateComponents = dateStart.split("-");
    let endDateComponents = dateEnd.split("-");
    let startDateItem = new Date(`${startDateComponents[1]} ${startDateComponents[2]} ${startDateComponents[0]}`).getTime();
    let endDateItem = new Date(`${endDateComponents[1]} ${endDateComponents[2]} ${endDateComponents[0]}`).getTime();

    return startDateItem < endDateItem;
}