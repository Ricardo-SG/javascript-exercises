const removeFromArray = function(arreglo, ...values) {

    // arreglo is how arrays are called in spanish, thought not the literal meaning
    let resultado = [];
    resultado = arreglo;
    
    values.forEach(function (value) {
        resultado = removeOneValueFromArray(resultado, value);
    });


    return resultado;

}; 

function removeOneValueFromArray(arreglo, value) {

    let resultado = [];

    arreglo.forEach(function (element) {

        if (element !== value) {
            resultado.push(element);
        }  
    })   
    return resultado;
};



// Do not edit below this line
module.exports = removeFromArray;
