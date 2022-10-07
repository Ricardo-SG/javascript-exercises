const fibonacci = function(num) {

    let intNum = parseInt(num);
    if (intNum < 0) {
        return 'OOPS';

    }
    if (intNum < 2) {
        return intNum;
    }
    else {
        return fibonacci(intNum-1) + fibonacci(intNum-2);
    }

};

// Do not edit below this line
module.exports = fibonacci;
