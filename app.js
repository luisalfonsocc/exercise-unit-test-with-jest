// Declaramos una función con el nombre exacto "formEuroToDollar"


// dólares a yenes
function fromDollarToYen(dollars) {
    const dollarToYen =165.5;
    return dollars * dollarToYen;
  }
  
  //euros a dólares
  function fromEuroToDollar(euros) {
    const euroToDolar = 1.07;
    return euros * euroToDolar;
  }
  
  //yenes a libras
  function fromYenToPound(yenes) {
    const yenToPound = 0.87;
    return yenes * yenToPound;
  }
  

  console.log(fromEuroToDollar(3.5))

  module.exports = {fromEuroToDollar, fromYenToPound,fromDollarToYen}