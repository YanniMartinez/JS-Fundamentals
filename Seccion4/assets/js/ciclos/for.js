
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
}


console.warn('For in');
for( let i in heroes ) {
    console.log( heroes[i] );
}

/**Básicamente lo que hace es extraer el valor del arreglo
 * y se lo asigna a la variable heroe, en cada iteración tenemos 
 * el valor de la iteración, si vemos no mandamos la referencia de la posición
 * sino directamente el valor del arreglo en ese sitio
 */
console.warn('For of');
for( let heroe of heroes ){
    console.log( heroe );
}



