class Animals{
  constructor(name,age){
    this.name = name
    this.age = age
  }

  makeNoise(){
    console.log('Fazendo barulho genérico')
  }

}

class Dog extends Animals {
  //sobreescrevendo a classe
  makeNoise(){
    console.log('woof woof woof')
  }
}

const dog = new Dog('Snopy', 18)

dog.makeNoise()

console.log(dog.name)


class Cat extends Animals {
  //sobreescrevendo a classe
  makeNoise(){
    console.log('Maiu Miau')
  }

  run(){
    console.log('correndo...')
  }
}

const cat = new Cat('Mel', 18)

cat.makeNoise()
console.log(cat.name)

cat.run()

//dog.run() - não tem 

