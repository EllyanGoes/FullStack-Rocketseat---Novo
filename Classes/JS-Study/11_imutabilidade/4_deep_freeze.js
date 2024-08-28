const book = {
  title: "Objetos Imutáveis",
  category: "jarvascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@gmail.com",
  },
};

Object.freeze(book);

// book.category = "CSS";
// book.author.name = "João";

function deepFreeze(object) {
  //Obtem um array com todas as propiedades do objeto.
  const props = Reflect.ownKeys(object);

  //Itera sobre todas as propiedades do objeto
  for (const prop of props) {
    //obtem um valor associado a propiedade atual.
    const value = object[prop];

    //verifica se o valor é um objeto ou uma função para continuar verificando e aplicando o deepFreeze em objeto aninhados.
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

//Chama a função paa congelar o objeto com deep freeze (imutabildiade profunda)
deepFreeze(book);

book.category = "HTML";
book.author.name = "joão";
book.author.email = "joão@gmail.com";

console.log(book);
