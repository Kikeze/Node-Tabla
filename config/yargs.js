

const argv = require("yargs")
    .options("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar"
    })
    .options("l", {
        alias: "listar",
        type: "boolean",
        default: false,
        describe: "Muestra en consola el resultado de la tabla de multiplicar"
    })
    .options("h", {
        alias: "hasta",
        type: "number",
        default: 10,
        describe: "Indica la longitud de la tabla de multiplicar"
    })
    .check( (argv, options) => {
        if( isNaN(argv.b) ) {
            throw "La base debe ser un numero";
        }
        if( isNaN(argv.h) ) {
            throw "El valor de hasta debe ser un numero"
        }
        else if (argv < 1 || argv > 100) {
            throw "El parametro hasta no es valido"
        }
        return true;
    })
    .argv;


module.exports = argv;