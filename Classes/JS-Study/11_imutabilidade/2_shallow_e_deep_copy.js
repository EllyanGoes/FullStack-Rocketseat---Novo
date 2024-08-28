const htmlCourse = {
  course: "HTML",
  //objeto aninhado
  students: [{ name: "Rodrigo", email: "rodrigo@gmail.com" }],
};

//Cópia raza
/*
const jsCourse = {
  ...htmlCourse,
  course: "JarvaScript",
};
*/

//Vai modificar o htmlCourse  também, poi students é uma referência e não uma cópia
// jsCourse.students.push({ name: "João", email: "joão@gmail.com" });

//Deep copy
/*const jsCourse = {
  ...htmlCourse,
  course: "JarvaScript",
  students: [
    ...htmlCourse.students,
    { name: "Maria", email: "maria@gmail.com" },
  ],
};

jsCourse.students.push({ name: "joão", email: "joão@gmail.com" });

*/

const jsCourse = {
  ...htmlCourse,
  course: "JarvaScript",
};

jsCourse.students = [
  ...htmlCourse.students,
  { name: "joão", email: "joão@gmail.com" },
];

console.log(htmlCourse, jsCourse);

//shalow copy -> dados primitivos
//deep copy -> manipular dados complexos
