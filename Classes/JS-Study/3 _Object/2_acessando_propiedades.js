const user = {
  name: 'Rodrigo',
  email: 'ellyan.goes@gmail.com',
  message: function (){
    //console.log(`Olá ${user.name}`)
    console.log(`Olá ${this.email}`)
    // o this não funciona com arrow function
  }
}

user.message()
