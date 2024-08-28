const address1 = {
  street: "Av. Brasil",
  number: "20",
};

//Isso não é uma cópia. É uma referência
// const address2 = address1;
// address2.number = 30;

const address2 = { ...address1, number: 20 };
console.log(address1, address2);

//Exemplo de referência de array arrays
const list1 = ["Apple", "Banna"];
// list2.push("watermelon");

const list2 = [...list1, "Watermelon"];
//list2.push("Watermelon");

console.log(list1, list2);
