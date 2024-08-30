class User {
  constructor({ email }) {
    this.email = email;
  }

  sendMenssge() {
    console.log("Mensagem enviada para:", this.email);
  }
}
let user = new User({ email: "jão@gmail.com" });

user.sendMenssge();
