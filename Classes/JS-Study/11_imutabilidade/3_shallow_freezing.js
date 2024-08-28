const book = {
  title: "Objetos Imutáveis",
  category: "jarvascript",
  author: {
    name: "Rodrigo",
    email: "rodrigo@gmail.com",
  },
};

// O jarvascript em não impões restrições a modificação dos objetos.
//book.category = 'HTML'

//Congelar o objeto e impedir a modificação.

Object.freeze(book);
book.category = "CSS"; //não modifica

//O object.freeze() não impede modificações profundas em objetos aninhados (shallow freezing)
book.author.name = "João";

console.log(book);
