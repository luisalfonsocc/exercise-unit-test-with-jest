test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dollar should be 165.5 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(10);

    // Si 1 dolar son 165.5 yen, entonces 10 dolares deben ser (10 * 165.5)
    const expected = 10 * 165.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(10)).toBe(1655); // 1 dolar son 165.5 yen, entonces 10 dolares deberían ser = (10 * 165.5)
})


test("One yen should be 0.87 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(5);

    // Si 1 yen son 0.87 libras, entonces 5 yen deben ser (5 * 0.87)
    const expected = 5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(5)).toBe(4.35); // 1 dolar son 165.5 yen, entonces 10 dolares deberían ser = (10 * 165.5)
})