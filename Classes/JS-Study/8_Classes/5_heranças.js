class Animals{
  constructor(name,age){
    this.name = name
    this.age = age
  }

  makeNoise(){
    console.log('Fazendo barulho')
  }

}

class Dog extends Animals {
  //Não tem nada aqui
}

const dog = new Dog('Snopy', 18)

dog.makeNoise()

console.log(dog.name)


class Cat extends Animals {
  //Não tem nada aqui
}

const cat = new Cat('Mel', 18)

cat.makeNoise()
console.log(cat.name)
