const ftoc = function(tempF) {

  // formula ((tempf-32) * 5)/9
  // We round it to 1 decimal

  const resultado = (((tempF-32) * 5) / 9);
  return parseFloat(resultado.toFixed(1));

};

const ctof = function(tempC) {

  // formula ((tempC*9)/5)+32
  // We round it to 1 decimal

  const resultado = ((tempC*9)/5)+32;
  return parseFloat(resultado.toFixed(1));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
