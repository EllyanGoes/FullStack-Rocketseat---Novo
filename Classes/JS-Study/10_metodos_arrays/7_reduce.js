/*
O método reduce é utilizado para reduzir um array a um único valor.
Parâmetros:
- Array original (values)
- Acumulador (accumulator)
- Valor da iteração (currentValue)
- Valor Inicial (0)
- Index (index da iteração atual - opcional)
*/

const values = [1, 2, 3, 4, 5];

const sum = values.reduce((accumulator, currencyValue, index) => {
  console.log("ACUMULADOR", accumulator);
  console.log("CURRENT VALUE", currencyValue);
  console.log("INDEX", index);

  console.log("SOMA", accumulator + currencyValue);
  console.log("###############");

  return accumulator + currencyValue;
}, 10);

console.log(sum);
