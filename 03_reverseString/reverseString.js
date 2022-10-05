const reverseString = function(cad) {
    /* cad --> cadena --> for "cadena de texto" in spanish */

    let reversedCad = '';
    reversedCad = cad.split(""); 
    reversedCad = reversedCad.reverse();
    reversedCad = reversedCad.join("");

    return reversedCad;
};

// Do not edit below this line
module.exports = reverseString;
