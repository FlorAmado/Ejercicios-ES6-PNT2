//! 1 let y const
let edad = 20
const nombre = "Florencia"
//nombre = "Rocio"
edad = 2
console.log(nombre,edad);

//*respuesta a:
//si quiero cambiar el valor de una constante tira error: TypeError: Assignment to constant variable.
//si quiero cambiar el valor de una variable usando let es valido
let numeros = [1,2,3,4,5]
/*
for (const index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    console.log(element);   
}
*/
//*respuesta b: 
//si declaro const al index de un bucle tira error: TypeError: Assignment to constant variable.

const persona = {
    nombre:"Florencia",
    apellido: "Amado",
    edad:20,
}

persona.edad = 2
console.log(persona);
//*respuesta c:
//es posible modificar una propiedad del objeto con const, porque const protege la referencia, no el contenido.

puntoD = () => {
    var v = 1
    let l = 2
    const c = 3
    console.log(v,l,c);
}
puntoD()
//console.log(v,l,c);
//*respuesta d, fuera de la funcion no se puede acceder a la variable con var, solo es visible dentro de la funcion
//error. ReferenceError: v is not defined

//! 2 Arrays (operaciones básicas) 

//*a
let frutas = ["pera","banana","frutilla","naranja","kiwi"]

//agregar al principio
frutas.splice(0,0,"mango")
console.log(frutas,"agregro mango");

//agregar al final
frutas.push("anana")
console.log(frutas,"agregro anana");

//*b
for (let i = 1; i <= numeros.length; i++) {    
    console.log(i*2);
}
//let numerosDuplicado = numeros.map((num) => num * 2)
//console.log(numerosDuplicado);

//*c
let colores = ['rosa','rojo','azul']
let masColores = ['negro','gris']

let variosColores = colores.concat(masColores)
console.log(variosColores);

//*d
let original = [1,2,3,4,5,6]

const resultado = original.slice(1, -1);

console.log("Original:", original);   // [1, 2, 3, 4, 5, 6] (intacto)
console.log("Resultado:", resultado); // [2, 3, 4, 5]
//* respuesta d: Slice(), no modifica el original



