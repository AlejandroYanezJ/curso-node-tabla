const fs = require('fs');
require('colors');

const guardarTabla = async (numero, salida) => {
    try{
        fs.writeFileSync(`./tablas/tabla-${numero}.txt`,salida);
        return`Archivo tabla-${numero}.txt creado exitosamente!` .bgGreen;
    }catch{
        return `Error al guardar la tabla del ${numero}` .bgRed;
    }
}

module.exports = {
    guardarTabla
}