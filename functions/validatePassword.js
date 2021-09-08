export function validatePassword(pass) {
    let regNumber = pass.match(/\d/g);
    if (pass.length < 6 || regNumber == null) {
        console.log("false")
        // return false;
    }
    //
    // return true;
}
