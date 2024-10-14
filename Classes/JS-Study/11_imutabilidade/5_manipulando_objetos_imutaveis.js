const book = {
  title: "Objetos Imutáveis",
  category: "jarvascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@gmail.com",
  },
}

const updateBook = {
  ...book,
  title: "criando um Front-End moderno com HTML",
  category: "html",
  type: "Programação",
}

//Original Intacto
console.log(book)

//Modificado
console.log(updateBook)

//Utilizando operador de desestruturação (rest operator) para remover propriedades

const { category, ...bookWithOutCategory } = book
console.log(bookWithOutCategory)
