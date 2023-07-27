const argv= require('yargs')
                .option('b', {
                    alias: 'base',
                    demandOption: true,
                    default: '10',
                    describe: 'is the root of multiply table',
                    type: 'number'
                })
                .option('h', {
                    alias: 'hasta',
                    default: '10',
                    describe: 'este es el numero hasta dond queiere las table',
                    type: 'number'
                })
                .option('l',{
                    alias:'listar',
                    demandOption:false,
                    describe: 'show the list',
                    default:false,
                    type:'boolean'
                })
                .check((argv,options)=>{
                    console.log('yargs',argv)
                    if(isNaN(argv.b)){
                        throw 'Tiene que ser numero'
                    }
                    return true
                })
                .argv


module.exports =argv;