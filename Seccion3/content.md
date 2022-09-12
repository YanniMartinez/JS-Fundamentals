# Tipos de funciones JS

```
/** Función tradicional */
function saludar( nombre ) {
    // console.log( arguments ); elemento explicito que obtiene todos los argumentos
    // console.log('Hola ' + nombre );
    return [1,2];

    // Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return');
}

/** Función anónima */
const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre );
}

/** Funciones de Flecha o lambda Functions */
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

/** Función de flecha con argumento, los parentesis de los 
 * argumentos son opcionales, sin embargo, se recomienda ponerlos
 * Son más eficientes que las anteriores
*/
const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre );
}
```