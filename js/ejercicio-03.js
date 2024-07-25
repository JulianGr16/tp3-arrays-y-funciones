let apariciones = [];
for (let i = 0; i <= 12; i++) {
    apariciones[i] = 0;
}

function lanzarDados() {
    return Math.floor(Math.random() * 6) + 1;
}

for (let i = 0; i < 50; i++) {
    let dado1 = lanzarDados();
    let dado2 = lanzarDados();
    let suma = dado1 + dado2;
    apariciones[suma]++;
}

let tabla = '<table border="1"><thead><tr><th>Suma</th><th>Apariciones</th></tr></thead><tbody>';
for (let i = 2; i < apariciones.length; i++) {
    tabla += `<tr><td>${i}</td><td>${apariciones[i]}</td></tr>`;
}
tabla += '</tbody></table>';

document.write(tabla);