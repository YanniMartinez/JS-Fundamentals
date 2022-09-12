/**
 * Todos los primitivos se pasan por valor
 * y todos los objetos se pasan por referencia
 */
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// Operador Spreat ... (Fuera de todos los ciclos) nospermite evitar que se manden valores por referencia
let juan = { nombre: 'Juan' };
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

//Aquí se trata de una parametro REST, es decir, une todos los parametros en un solo arreglo
// const cambiaNombre = ( ...persona) =>{}

//Esta es una aplicación de la función donde usamos el spreat y rompemos el envio por referencia
const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );


console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
//El método slice también permite romper el uso por referencia
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

///Uso de spread para romper referencia, normalmente el spread es más rápido
console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });