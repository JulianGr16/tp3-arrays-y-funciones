function analizarCadena(cadena){
    if(cadena === cadena.toLowerCase()){
        alert('la cadena de texto solo contiene minusculas');   
    }
    else if(cadena === cadena.toUpperCase()){
        alert('la cadena de texto solo contiene mayusculas');
    }
    else{
        alert('la cadena de texto contiene mayusculas y minusculas')
    }
}

const cadena = prompt('ingrese una frase:');
analizarCadena(cadena);