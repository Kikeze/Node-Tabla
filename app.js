const { crearArchivo } = require("./helpers/multiplicar.js");
const argv = require("./config/yargs.js")
const colors = require("colors")


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then((archivo) => {
        console.log("Archivo creado con exito:", archivo.rainbow);
    })
    .catch((err) => {
        console.warn( err );
    });









