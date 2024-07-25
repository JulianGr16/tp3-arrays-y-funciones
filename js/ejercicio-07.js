function tabla(){
    let numero = parseInt(prompt('ingrese un numero'));
    let resultado = 0;
    
    document.write(`<h2>Tabla del numero: ${numero} </h2>`)

    for(let i = 1; i<=10; i++){
        document.write('<ul>')
        document.write(`<li>${numero} X ${i} = (${numero * i})</li>`);
        document.write('</ul>')
    }
}

tabla();