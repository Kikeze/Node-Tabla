const fs = require("fs");
const colors = require("colors")


const crearArchivo = async (base, listar, hasta) => {
    if ( listar ) {
        console.log("===============".green);
        console.log(`TABLA DEL:`.green, colors.blue( base ) );
        console.log("===============".green);
    }
        
    let salida = "";
    let consola = "";

    for( let a = 1; a <= hasta; a++ ) {
        salida += `${ base } x ${ a } = ${ base * a}\n`;
        consola += `${ base } ${ "x".green } ${ a } ${ "=".green } ${ base * a}\n`;
    }

    if ( listar ) {
        console.log( consola );
    }

    try {
        fs.writeFileSync(`./salida/Tabla-${ base }.txt`, salida);
        return `Tabla-${ base }.txt`;
    }
    catch( err ) {
        throw err;
    }
}


module.exports = {
    crearArchivo
}



