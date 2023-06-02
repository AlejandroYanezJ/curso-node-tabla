const argv = require('yargs')
    .options('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Número del cual se calculará la tabla de multiplicar'
    })
    .options('l',{
        alias:'listar',
        type: 'boolean',
        demandOption:false,
        default:false,
        describe:'Flag para imprimir la tabla calculada'
    })
    .options('len',{
        alias:'largo',
        type:'number',
        default:10,
        describe:'Largo de la tabla a calcular'
    })
    .check((argv,options) =>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número';
        }
        if(isNaN(argv.len)){
            throw 'El largo tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;