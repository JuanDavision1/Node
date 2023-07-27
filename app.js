
const { crearFile} = require('./Helpers/multiplicar')
const argv = require('./config/yards')
 require('colors');

console.log(argv)
console.log('base:yargs',argv.b)

 crearFile(argv.b, argv.l,argv.h)
 .then( nombreArchivo=> console.log(nombreArchivo,'Creado'))
 .catch(err=> console.log(err))