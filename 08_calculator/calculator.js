const CONSOLE_LOG_ACTIVE = true;
//const CONSOLE_LOG_ACTIVE = false;

const add = function() {


  let sumTotal = 0;

  for (let i = 0; i<arguments.length;i++) {
    cl('i: ' + i);
    cl('arguments.length: ' +arguments.length);
    cl('arguments[i]: '+arguments[i]);
    sumTotal += arguments[i];
    cl(sumTotal);
  }
    
  
  
    return parseInt(sumTotal);
	
};

function cl(obj) {
  if (CONSOLE_LOG_ACTIVE) {
    console.log(obj);
  }
}

const subtract = function(a,b) {

  return Math.abs(a-b);
	
};

const sum = function(obj) {

  let sumTotal = 0;

  for (let i = 0; i<obj.length;i++) {
   // cl('i: ' + i);
   // cl('arguments.length: ' +obj.length);
   // cl('arguments[i]: '+ obj[i] );
    sumTotal += parseInt(obj[i]);
   // cl(sumTotal);
  }
    return sumTotal;
	
};

const multiply = function(obj) {

  if (obj.length == 0) {
    return 0;
  }
  else {

    let mulTotal = 1;

    for (let i = 0; i<obj.length;i++) {
      cl('i: ' + i);
      cl('arguments.length: ' +obj.length);
      cl('arguments[i]: '+ obj[i] );
      mulTotal *= parseInt(obj[i]);
      cl('total: ' +mulTotal);
    }
      return mulTotal;
  }

};

const power = function(a,b) {
  return a**b;
};

const factorial = function(num) {
  cl('num: '+num);
 
  let totalSum = 1;
  for (let i = num;i>0;i--)  {
    cl('i: ' +i );
    totalSum *= i;
    cl('totalSum: ' + totalSum);
  }

  return totalSum;

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
