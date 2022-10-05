const leapYears = function(year) {

    let dividedByFour;
    let dividedByHundred;
    let dividedByFourHundred;

    
    if (year%4 === 0) {
        dividedByFour = true;
    }

    if (year%100 === 0) {
        dividedByHundred = true;
    }

    if (year%400 === 0) {
        dividedByFourHundred = true;
    }

    if  ((dividedByFour === true && dividedByHundred !== true) ||
         (dividedByFour === true && dividedByHundred === true && dividedByFourHundred === true))
    {
        return true;
        }
    else {
        return false;
    }



};

// Do not edit below this line
module.exports = leapYears;
