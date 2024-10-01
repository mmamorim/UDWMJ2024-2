import { fazAlgo, createPerson } from "./modulo.js"

fazAlgo()

let height = 1.80

let person = createPerson()

person.birthday()
console.log("person",person);

let { name, age } = person

console.log("saida",{ name, age });
