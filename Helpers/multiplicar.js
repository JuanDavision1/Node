
const { writeFile } = require('node:fs');
 const crearFile = async(base= 5,listar,hasta=10)=>{
    try{

            let salida= '';

            for (let index = 1; index <= hasta; index++) {
            salida += base*index   
            }
            if(listar){
                console.log("========================".green)
                console.log("===========5============".blue)
                console.log("========================".rainbow)
                console.log(salida)

            }
        //primer valor es el path donde estara el archivo,la data de lo que quiera, y el callback
        writeFile('./SALIDA/tabla-99.txt',salida,(err)=>{
            if(err) throw err;
            return 'Archivvxccvo creado dfgfdf'
        })
    }catch(err){
        throw err

    }
   
}
module.exports ={
    crearFile
}
