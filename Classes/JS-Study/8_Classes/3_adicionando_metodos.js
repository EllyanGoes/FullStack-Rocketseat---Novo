class User {
  constructor(name, email){
    this.name = name
    this.email = email
  }
  sendemail(){
    console.log('Email enviado para', this.name,'para o endereço', this.email)
  }
}

const user = new User(`Ellyan`,`ellyan.goes@gmail.com`)


user.sendemail()
