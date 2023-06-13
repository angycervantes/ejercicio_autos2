import mongoose from "mongoose";

const uri = 'mongodb+srv://estudiolibre3:Yellow3Submarine@cluster0.5u619t1.mongodb.net/AutosDB'

const options = {
    autoIndex: true,
    serverSelectionTimeoutMS: 5000
}

const execute = () => {
    mongoose.connect(uri,options)
    .then(()=>{
        console.log('Conexion ok')
    })
    .catch((error)=> {
        console.log(error)
    })

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Error en la conexion a Mongo DB'));
    db.once('open', () => {
        console.log('Me conecte ok, mongodb')
    });
}

export {execute}