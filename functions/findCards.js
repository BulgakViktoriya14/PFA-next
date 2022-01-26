import {sortCard} from "./sortCard";

export function findCards(array, cards) {
    let resultArray = [];
    for (let key in cards) {
        array.forEach(function (item) {
            if(cards[key].id === item) {
                resultArray.push(cards[key])
            }
        })
    }

    sortCard(resultArray);
    return resultArray;
}
