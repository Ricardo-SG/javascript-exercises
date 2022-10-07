const palindromes = function (text) {

    //const onlyCars  = text.replace(/[^\p{L}\s]/gu,"").toLowerCase();
    const onlyCars  = text.replace(/[\W_]/g,"").toLowerCase();
    const long      = onlyCars.length; // because I can
    let inversI     = parseInt(long-1);

    cl('onlyCars --> ' +onlyCars);
    for(let i = 0; i<long;i++) {
        inversI = long-i-1;       
        if (onlyCars.charAt(i) !== onlyCars.charAt(inversI)) {
            cl(onlyCars.charAt(i)+' vs ' + onlyCars.charAt(inversI));
            return false;
        }
    }
    return true;
    
};

function cl (txt) {
    const show = true;

    if (show) {
        console.log(txt);
    }
 }

// Do not edit below this line
module.exports = palindromes;
