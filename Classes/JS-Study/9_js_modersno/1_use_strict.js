// O dcript mode (modo estrito): ativiando esse modo, os erros que eram sileciosos passam a ser excessões no js

//"use strict";

function showMenssage() {
  // let personName = "Ellyan Antonio Sampaio Goes";
  // console.log("Olá", personName);
}

showMenssage();

class Student {
  get point() {
    return 7;
  }
}

let student = new Student();
//tentar mudar uma propiedade que é somente leitura
//student.point = 10;

//delete window.document;

function sum(a, a, b) {
  return a + a + b;
}

result = sum(1, 3, 2);

console.log(result);
