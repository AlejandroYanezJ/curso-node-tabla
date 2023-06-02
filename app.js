const {guardarTabla} = require('./helpers/guardar.js');
const {calculaTabla} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js')

console.clear();
guardarTabla(argv.b,calculaTabla(argv.b,argv.len,argv.l))
    .then(creado => console.log(creado))
    .catch(err => console.log(err));












