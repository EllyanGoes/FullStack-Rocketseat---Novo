//call stack ->executa
//(1) execução síncrona
console.log(1);

//call stack -> MicroTask
//(3) São executadas antes de temporizadores e promessas
queueMicrotask(() => {
  console.log(2);
});

//call stack -> WEB API -> Task Queue
//(5)Macrotask que aguarda o temporizador ser acionado
setTimeout(() => {
  console.log(3);
}, 1000);

//call stack -> execute
//(2) execução síncrona
console.log(4);

//call stack -> WEB API -> MicroTask
//(4)Adiciona uma MicroTask pois já está sendo resolvida
Promise.resolve(true).then(() => {
  console.log(5);
});
