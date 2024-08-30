/* utilizando o fetch com o then -> usar quando não queremos criar uma função nova 
fetch("http://localhost:3333/products")
  .then((response) => response.json())
  .then((data) => console.log(data));
*/

//utilizando o fetch com o async/await
async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  console.log(data);
}

async function fetchProductById(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`);
  const data = await response.json();
  console.log(data);
}

//fetchProducts();
//fetchProductById("1");

const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const productForm = document.getElementsByTagName("form");

addEventListener("submit", async (event) => {
  event.preventDefault();

  await fetch("http://localhost:3333/products", {
    //informa o método, por padrão e o GET
    method: "POST",
    headers: {
      //Informa a formato que os dados serão enviados, nesse cado é o json mas tem o XML também
      "Content-Type": "application/json",
    },
    //.stringfy -> serializar, passar o objeto para texto
    //.parse -> ele passa de texto para objeto mas precisa ser válido
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      name: productName.value,
      price: productPrice.value,
    }),
  });
});
