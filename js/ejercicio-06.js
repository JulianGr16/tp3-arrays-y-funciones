function calcularPerimetro(){
    let ladoA = parseFloat(prompt('ingrese le primer valor: '));
    let ladoB = parseFloat(prompt('ingrese el segundo valor: '));
    let perimetro = 2 * (ladoA + ladoB);
    document.write(`el perimetro de este rectangulo es: ${perimetro}`)
}

calcularPerimetro();
