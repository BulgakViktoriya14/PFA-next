import {convertDate} from "./validateDates";

export function validateDateEnd(dateEnd) {
    let currentDate = new Date().getTime();
    alert(new Date())
    alert(currentDate)
    alert(currentDate > convertDate(`${dateEnd} 00:00:00`))
    return currentDate > convertDate(`${dateEnd} 00:00:00`);
}
