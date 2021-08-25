export function validateEmptyField(fieldsArray) {
    let countFalse = 0;
    fieldsArray.forEach(function (item) {
        if (item === "") {
            countFalse++;
        }
    })
    return countFalse <= 0;
}