const repeatString = function(lText, lRepeat) {

    /* ltext -> local text variable */
    /* lRepeat -> local repeat variable */
    let result = ''; /* the calculated return of this function */

    if (lRepeat >= 0) {
        for (let i=0;i<lRepeat;i++)
        {
            result += lText;
        }    
    }
    else
    {
        result = 'ERROR';
    }
    


    return result;
};

// Do not edit below this line
module.exports = repeatString;
