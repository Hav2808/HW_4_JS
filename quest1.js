function getPasswordChecker(password) {
    return function(correct_password) {
        if (password === correct_password) {
            return true;
        }
        return false;
    }
}

const check = getPasswordChecker('Asdfg');

console.log(check('Sdwe'));
console.log(check('12asd'));
console.log(check('Asdfg'));