//* 1 let y const
let edad = 20
const nombre = "Florencia"
//nombre = "Rocio"
edad = 2
console.log(nombre,edad);

//respuesta a:
//si quiero cambiar el valor de una constante tira error: TypeError: Assignment to constant variable.
//si quiero cambiar el valor de una variable usando let es valido
let numeros = [1,2,3,4]
/*
for (const index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    console.log(element);   
}
*/
//respuesta b: 
//si declaro const al index de un bucle tira error: TypeError: Assignment to constant variable.

const informacionPersonal = {
    nombre:"Florencia",
    apellido: "Amado",
    edad:20,
}

informacionPersonal.edad = 2
console.log(informacionPersonal);
//respuesta c:
//es posible modificar una propiedad del objeto con const, porque const protege la referencia, no el contenido.

puntoD = () => {
    var v = 1
    let l = 2
    const c = 3
    console.log(v,l,c);
}
puntoD()
//console.log(v,l,c);
//respuesta d, fuera de la funcion no se puede acceder a la variable con var, solo es visible dentro de la funcion
//error. ReferenceError: v is not defined


