//Entendemos que un buffer es una estructura donde almacenamos información
//volátil como el buffer de carga del reproductor de YouTube

//Inicializamos un buffer vacío con capacidad para 8 bytes
//Hay dos formas de hacerlo, haciendo uso del método alloc()
//que es un método seguro ya que inicializa los octetos a cero
let buffer_alloc = Buffer.alloc(8);

//si usamos allocUnsafe() inicializaríamos un buffer con octetos
//residuales que residen en la memoria del sistema
let buffer_alloc_unsafe = Buffer.allocUnsafe(8);

//o mediante la palabra reservada new para crear una nueva instancia de Buffer
//aunque el problema de esta última es que está obsoleta y presenta issues de seguridad
let buffer_obj = new Buffer(8);

console.log(buffer_alloc);
console.log(buffer_alloc_unsafe);
console.log(buffer_obj);

//Para inicilizar un buffer desde un array usando los dos métodos anteriores usamos from()
let buffer_from = Buffer.from([20,10,40,33,77,88,99,10]);
let buffer_init = new Buffer([10,20,30,40,50,60,70,80]);

console.log(buffer_from);
console.log(buffer_init);

//Podemos posibilidad de codificar la información como utf-8, ascii, ucs2, base64, binario, etc,.
let buffer_nombres = Buffer.from("Juan, Maria, Veronica, Irene", "utf-8");

console.log(buffer_nombres);

//para leerlo de acuerdo a nuestro entendimiento lo decodificamos
let temp_nombres = buffer_nombres.toString("utf-8", 0, buffer_nombres.length);
console.log(temp_nombres);

//Es posible escribir en un buffer, por ejemplo en el buffer_nombres
//la funcion write nos devuelve el tamaño actual del buffer una vez escrito
let len = buffer_nombres.write("Pedro e Inma", "utf-8");
console.log(buffer_nombres.toString("utf-8", 0, len));