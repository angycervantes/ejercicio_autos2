import MakeModel from '../model/make_model.js'

const showMakes = (req, res) => {
    const consulta = MakeModel.find({});

    consulta.exec()
    .then((marcas) => {
        res.json(marcas);
    })
    .catch((error) =>{
        res.json({'mensaje':error})
    })
};


const addMakes = async (req,res) => {
    console.log(req.body)
    const { make, sucursal, contact, address } = req.body

    const makesObject = await new MakeModel({make, sucursal, contact, address})

    makesObject.save()
    .then((resultado)=>{
        res.json({'mensaje':resultado});
    })
    .catch((error) => {
        res.json({'mensaje':error})
    })
};

export default { addMakes, showMakes }