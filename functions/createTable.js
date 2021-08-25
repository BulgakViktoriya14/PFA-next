export function createTable(columnOne, columnTwo) {
    let tbodyElement = document.querySelector(".report__table .tbody");

    tbodyElement.innerHTML = "";

    columnOne.forEach(function (item, index) {
        let row = document.createElement('tr');
        let tdOne = document.createElement('td');
        let tdTwo = document.createElement('td');
        tdOne.classList.add("td");
        tdTwo.classList.add("td");
        tdOne.innerText = `${item}`;
        tdTwo.innerText = `${columnTwo[index]}`;
        row.append(tdOne);
        row.append(tdTwo);
        tbodyElement.append(row);
    })
}