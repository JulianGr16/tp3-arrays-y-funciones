
do{
    let ciudades = [];
    let ciudad = prompt('ingrese el nombre de un pais y ciudad: ');
    if(ciudad){
        ciudades.push(ciudad)
        document.write('<ul>')
        document.write(`<li>${ciudades}</li>`)
        document.write('</ul>')
    }   
}
while(confirm('desea seguir agregando ciudades?'));



