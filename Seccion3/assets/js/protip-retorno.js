
// function crearPersona( nombre, apellido ) {
//     return { nombre,apellido }
// }
const crearPersona = ( nombre, apellido ) => ({ nombre,apellido });



const persona = crearPersona( 'Fernando', 'Herrera' );
console.log( persona );


function imprimeArgumentos() {
    console.log( arguments );
}

/** Cacha el primer argumento sólo, pero los ...args
 * son todos los demás argumentos que reciba y los coloca dentro
 * de un arreglo, ejemplo
 * { edad:10, args:Array[4]}
 */
const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({ edad, args });
    return args;
}

/**Desestructuración en base a las posiciones */
const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludo });

/**Extrayendo unicamente la variable apellido que viene en la función pero
 * dandole el nombre de variable como nuevoApellido
 */
const { apellido: nuevoApellido } = crearPersona( 'Fernando', 'Herrera' );
console.log({ nuevoApellido });


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }

/**Desestructuración de atributos haciendo uso de una funcion de flecha */
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );