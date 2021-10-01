import {convertDate} from "./convertDate";

export function validateDateEnd(dateEnd) {
    let currentDate = new Date().getTime();
    return currentDate > convertDate(`${dateEnd} 00:00:00`);
}
