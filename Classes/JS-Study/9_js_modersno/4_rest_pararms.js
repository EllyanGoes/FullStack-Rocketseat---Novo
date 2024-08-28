//Rest Params (...) permite representar um número indefinido de argumento como um array

function values(...rest) {
  //console.log(a);
  console.log(rest.length);
  console.log(...rest);
  console.log(rest);
}

values(1, 2, 3, 4);

//pode ser outro nome no lugar de rest, como args
