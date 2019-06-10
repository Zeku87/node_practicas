//No ha necesidad de realizar un fs.close tras una operación
//porque ninguna de ellas devuelve un descriptor de fichero
const fs = require('fs');
const filename = 'texto.txt';

//Creación de fichero en caso de no existir adjuntando sin sobreescribir texto plano
function append() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                fs.appendFile(filename, 'Un texto cualquiera', (error) => {
                    if(error) e();
                    else console.log("Append realizado con éxito");
                })
            );
        });
    });
}

//Leemos del fichero
function read() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                fs.readFile(filename, 'utf-8', (error, data) => {
                    if(error) e();
                    else console.log(data)
                })
            );
        });
    });
}

//escribimos sobreescribiendo la información
function write() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                fs.writeFile(filename, "Texto que sobreescribe al anterior", (error) => {
                    if(error) e();
                    else console.log("Escritura realizada con éxito")
                })
            );
        });
    })
}

const e = function handleError(error) {
    console.log(error);
}

async function main() {
    await append();
    await read();
    await write();
    await read();

}

main()