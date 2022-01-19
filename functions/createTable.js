import React from "react";

export function createTable(columnOne, columnTwo) {
    let tbodyElement = document.querySelector(".report__table .tbody");

    tbodyElement.innerHTML = "";

    columnOne.forEach(function (item, index) {
        let row = document.createElement('tr');
        let tdOne = document.createElement('td');
        let tdTwo = document.createElement('td');
        let tdThree = document.createElement('td');
        let button = document.createElement("button");
        button.setAttribute("id", index);
        button.classList.add("button-show-cards");
        tdOne.classList.add("td");
        tdTwo.classList.add("td");
        tdThree.classList.add("td");
        tdOne.innerText = `${item}`;
        tdTwo.innerText = `${columnTwo[index]}`;
        tdThree.append(button);
        row.append(tdOne);
        row.append(tdTwo);
        row.append(tdThree);
        tbodyElement.append(row);
    })
}
