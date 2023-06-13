import AutosModel from '../model/auto_model.js'
import MakeModel from '../model/make_model.js';

const showAutos = (req, res) => {
    const consulta = AutosModel.find({});

    consulta.exec()
    .then((autos) => {
        res.json(autos);
        //res.render('index',{autos});
    })
    .catch((error) =>{
        res.json({'mensaje':error})
    })
};

const addAuto = async(req,res) => {
    const { make, model, version, price, imagen } = req.body
    const makeObj = await MakeModel.findById({_id: make})

    if (!makeObj) return res.status(400).json({error: 'Make no encontrado'})

    const auto = new AutosModel({make: makeObj, model, version, price, imagen})

    auto.save()
    .then((resultado)=>{
        res.json({'mensaje':resultado});
    })
    .catch((error) => {
        res.json({'mensaje':error})
    })
};

//borra un elemento por id

const deleteAuto = (req, res) =>{
    const {id} = req.body

    AutosModel.findByIdAndRemove(id)
    .then((resultado)=> {
        res.json({'mensaje': resultado});
    })
    .catch((error)=> {
        res.json({'mensaje': error})
    })
};

//actualiza un item
const updateCar = (req, res) => {
    const {_id, make, model, imagen, price } = req.body

    AutosModel.findByIdAndRemove(_id, {make, model, imagen, price})
    .then((resultado) => {
        res.json({'mensaje': resultado});
    })
    .catch((error) => {
        res.json({'mensaje':error})
    })
}

export {showAutos, addAuto, updateCar, deleteAuto }