function listaDeCiudades(){
do{
    let ciudades = [];
    let ciudad = prompt('ingrese el nombre de una ciudad: ');
    if(ciudad){
        ciudades.push(ciudad)
        document.write('<ul>')
        document.write(`<li>${ciudades}</li>`)
        document.write('</ul>')
    }
}
while(confirm('desea seguir agregando ciudades?'));
}




