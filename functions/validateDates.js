import {convertDate} from "./convertDate";

export function validateDates(dateStart, dateEnd) {
    return convertDate(`${dateStart} 00:00:00`) < convertDate(`${dateEnd} 00:00:00`);
}
