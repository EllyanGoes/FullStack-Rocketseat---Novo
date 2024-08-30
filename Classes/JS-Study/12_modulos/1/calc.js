//default export - é a função padrão fornecida pelo módulo
export default function sum(a, b) {
  return a + b;
}

//named export - cada método é importado pelo seu próprio nome de exportação
export function multiply(a, b) {
  return a * b;
}

//ao invés de usar o export nas funções pode ser usado separo referenciando as funções
//export { sum, multiply };
