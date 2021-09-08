export function validatePassword(pass) {
    let regNumber = pass.match(/\d/g);
    let regUppercase = pass.match(/[A-Z]/g);
    let regLovercase = pass.match(/[a-z]/g);

    if (pass.length < 6 || regNumber == null || regUppercase == null || regLovercase == null) {
       return false;
    }

    return true;
}
