// import UserModel from '../model/user_model.js'

// const showUsers = (req, res) => {
//     const consulta = UserModel.find({});

//     consulta.exec()
//     .then((marcas)=> {
//         res.json(marcas);
//     })
//     .catch((error) =>{
//         res.json({'mensaje': error})
//     })
// };

// const addUser = async(req, res) => {
//     console.log(req.body)
//     const { username, email, password, nombre, apePaterno, rol} = req.body

//     const  userObject =await new UserModel({username, email, password, nombre, apePaterno, rol})

//     userObject.save()
//     .then((resultado)=>{
//         res.json({'mensaje': resultado});
//     })
//     .catch((error) => {
//         res.json({'mensaje':error})
//     })
// };

// export default { addUser, showUsers }