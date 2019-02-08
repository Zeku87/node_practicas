//importamos el módulo http con los miembros y funciones necesarios para utilizar el protocolo http 
const http = require('http');

//indicamos el número de IP y el puerto donde el servidor escucha las conexiones entrantes
const ip = '127.0.0.1';
const puerto = 9990;
const j = 0;

//creamos un servidor con algunas propiedades 
const servidor = http.createServer(
    //Parámetros de entrada
    (peticion, respuesta) => 
    //Salida:
    {
        respuesta.statusCode = 200; //OK
        respuesta.setHeader('Content-Type', 'text/plain'); //Tipo de contenido
        respuesta.end("Hola soy el servidor"); //literal que recibe el cliente
    }
);

//El servidor espera a alguna petición entrante
//listen tiene cuatro parámetros de entrada: puerto, ip, backlog(máx tamaño de peticiones encoladas), callback(acción a realizar)
//todos ellos son opcionales! además como ya sabéis podemos introducir parámetros extras
//añadimos el parámetro extra "error" para capturar cualquier error en la escucha
servidor.listen(puerto, ip, (error) => {
    //con return hacemos salir de la función en dicho punto al programa
    if(error){
       return console.log("Ha ocurrido un error: " + error);
    }
    
    //si no hay error
    console.log("El servidor está escuchando en el puerto " + puerto);
});