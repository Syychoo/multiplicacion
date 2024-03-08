
let numeroIngresado = parseInt(prompt("Ingresa un número desde el 1 al 20"));

const validarNumero = (numero) => {
    if (numero < 1 || numero > 20) {
        console.log('ERROR: Número fuera de rango')
        return false;
    }
    return true;
}

const generarMultiplicacion = (numero) => {
    for (let i = 1; i <= numero; i++) {
        let resultado = i * numero;
        console.log(`${i} x ${numero} = ${resultado}`);
    }
}

const generarFactorial = (numero) => {
    for (let i = 1; i <= numero; i++) {
        let resultado = 1;
        for (j = 1; j <= i; j++) {
            resultado *= j;
        }
        console.log(`Factorial de ${i} es: ${resultado}`);
    }
}


let validacion = validarNumero(numeroIngresado);

if (validacion) {
    generarMultiplicacion(numeroIngresado);
    generarFactorial(numeroIngresado);
}