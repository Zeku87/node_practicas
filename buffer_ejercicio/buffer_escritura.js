//Es preciso reservar el espacio suficiente para no quedarnos cortos
let buffer = Buffer.alloc(20);

let len = buffer.write("Añadir", "utf-8");

console.log(buffer.toString("utf-8",0, len))

len = buffer.write(" palabras", len, "utf-8");

console.log(buffer.toString("utf-8"));