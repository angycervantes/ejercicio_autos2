import { Schema as _Schema, model as _model } from "mongoose";

const Schema = _Schema

const AutoSchema = new Schema( {
    make: {
        type: _Schema.Types.ObjectId,
        ref:'makes'
    },
    model: {
        type: String,
        require: true,
        trim: true
    },
    imagen: String,
    price: String
})

const AutosModel = _model('autos',AutoSchema );
export default AutosModel;