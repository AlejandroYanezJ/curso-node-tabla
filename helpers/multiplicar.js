require('colors');

const calculaTabla = (numero, largo,listar) => {
    
    let salida = '';
    for (let i = 1; i <= largo; i++) {
        salida += `${numero} x ${i} = ${numero * i}\n`;
    }
    if(listar) {
        console.log(`==============================
    Calculando tabla del ${numero}    
==============================`.bgYellow);
        console.log(salida .rainbow);
    }
    return salida;
}

module.exports = {
    calculaTabla
}
