function esParOImpar(numero){
    if(numero % 2 === 0){
        alert('es un numero par');
    }
    else{
        alert('es un numero impar');
    }
}

const numero = parseInt(prompt('ingresa un numero entero'));
const resultado = esParOImpar(numero);
