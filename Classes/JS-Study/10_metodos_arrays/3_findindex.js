// 0 método findIndex() retorna o índice no array do primeiro elemento que satisfizer a condição. Caso contrári retorna -1, indicando que nenhum elemento passou no teste.

const values = [4, 6, 8, 12];

// Obtendo o primeiro índice do elemento que o valor for maior do que 4

const index = values.findIndex((value) => value);
console.log(index);
console.log(values[index]);
// Exemplo de quando não encontra.
console.log(values.findIndex((value) => value > 12));
