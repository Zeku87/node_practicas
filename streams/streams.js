const file_system = require('fs');

// ----- ESCRITURA ----- //

//Creamos un fichero si no existe ya para escribir sobre él
let file = file_system.createWriteStream('texto.txt', 'utf-8');

//Comprobamos que la escritura se realiza
if(file.write("Un texto que almacenar") === true){
    console.log("Escritura realizada con éxito");
}else{
    console.log("Error de escritura");
}

// ----- LECTURA ----- //

//Preparamos un fichero para leerlo: el fichero debe existir
file = file_system.createReadStream('texto.txt', 'utf-8');

//evento 'data' para el durante la lectura
file.on('data', (data) =>{
    console.log(data)
});

//evento 'end' para cuando completa la lectura
file.on('end', () =>{
    console.log(`Done`);
});

