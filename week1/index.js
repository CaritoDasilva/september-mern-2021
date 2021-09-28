//scope
 // pueden ser o globales o locales
// var toons = ['tom y jerry', 'dory', 'etc'];

// function deposit(money) {
//     const account = 10000
//     console.log("🚀 ~ file: index.js ~ line 7 ~ deposit ~ account", account)
//     return money + account;
// }

// function hacerQuequito(harina, huevo, leche) {
//     const queque = {
//         ingredient1: harina
//     }
    
// }



// console.log(hacerQuequito('harina', 'huevo', 'leche'))

// console.log("🚀 ~ file: index.js ~ line 7 ~ deposit ~ account", account)

//HOISTING
// var unicornio;
// console.log(unicornio)
// var unicornio = 'Soy un unicornio azul';
// console.log(unicornio);

// var unicornio = 'Soy un unicornio azul';
//const es un valor constante y let es una variable cuyo valor puede ser reasignado

//DESTRUCTURING
// const user = {
//     firstName: 'Carolina',
//     age: 38,
//     hobbies: ['leer por horas', 'salir a andar en bici', 'maratonear netflix viendo doramas']
// }
//TAREA :)
//Imprimir segundo hobbie


// const { firstName, age, hobbies } = user;
// console.log("🚀 ~ file: index.js ~ line 43 ~ hobbies", hobbies)

// const hob = "hobbies"



// console.log(`El usuario ${user.firstName} tiene ${age} años y su hobbie es ${user[hob]}`);

// const students = ['jose', 'carlos', 'maria', 'susana'];

// const [firstStudent, , thirdStudent] = students;
// console.log("🚀 ~ file: index.js ~ line 54 ~ thirdStudent", thirdStudent)
// console.log("🚀 ~ file: index.js ~ line 53 ~ firstStudent", firstStudent)

//SPREAD OPERATOR
//Hace una "shallow copy"

const userTwo = {
    firstName: 'Juanito',
    age: 25,
    hobbies: ['leer por horas', 'salir a andar en bici', 'maratonear netflix viendo doramas']
}

const copyUserTwo = {...userTwo, address: 'Pedro de Valdivia, Macul', age: 15}
// console.log("🚀 ~ file: index.js ~ line 68 ~ copyUserTwo", copyUserTwo)

// const fruits = ['apple', 'pineapple', 'banana']

// const moreFruits = ['strawberry']

// const copyFruits = [...moreFruits, ...fruits];
// console.log("🚀 ~ file: index.js ~ line 74 ~ fruits", copyFruits);

//rest

// const { age, firstName, ...rest } = userTwo
// console.log("🚀 ~ file: index.js ~ line 80 ~ rest", rest);

//ARROW FUNCTIONS

function sum(a, b) {
    return a + b;
}

const sumArrow = (a,b) => {
    return a + b
} 

const sumArrowWithouReturn = (a,b) => a + b;

console.log(sumArrow(5, 4));

//Operador Ternario

// const restriction = (age) => {
//     // if(age > 18) {
//     //     return 'Eres mayor de edad'
//     // } else {
//     //     return 'No puedes entrar'
//     // }

//     //  return age > 18 ? 'Eres mayor de edad' : 'No puedes entrar';
//     return age > 18 && 'Eres mayor de edad';
// }

const restriction = (age) => age > 18 && 'Eres mayor de edad';

console.log(restriction(21))