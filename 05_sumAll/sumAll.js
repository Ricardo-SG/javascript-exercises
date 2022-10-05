const CONTROL_CONSOLE_MESSAGES = true; // for testing easiness


const sumAll = function(num1, num2) {

    // first we pass a valid test for num1 and num2
    if (valid(num1) && valid(num2)) {
        // we determine the max and min number
        const max = Math.max(num1,num2);
        const min = Math.min(num1, num2);

        // create a variable to sum all the numbers
        let contador = 0; // contador means counter
        
        // Hacemos un bucle desde el menor hasta el mayor
        for (let i=min;i<=max;i++) {
            contador += i;
        }

        return contador; // and we're done
    }
    else {
        return 'ERROR';
    }
};

function valid(num) {

    // it must be a number
    if (typeof num !== 'number') {
        return false;
    }
    else if (num < 0) {
        // it must be positive
        return false;
    }

    return true;

}

function clog(texto) {
    if (CONTROL_CONSOLE_MESSAGES) {
        console.log(texto);
    }
}

// Do not edit below this line
module.exports = sumAll;
