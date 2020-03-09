const UserModel = require("../models/User");
var bcrypt = require('bcryptjs');


function login(req, res, next) {
    res.send("hi from controller");
}

async function register(req, res, next) {
    const candidate = await UserModel.findOne({email: req.body.email});
    if (candidate) {
        return res.status(409).json({message: "Такой пользователь существует"})
    }else{
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

        const newUser = new UserModel({
            email: req.body.email,
            password: hashedPassword
        })



        try {
            const savedUser = await newUser.save();
            res.status(201).json(savedUser)
        }catch(e){
            console.log(e)
        }

    };


    //


    //
    //
    // const
    //






}


module.exports = {
    login,
    register
}

// const user = new UserModel({
//     email: req.body.email,
//     password: req.body.password
// })
//
// user.save()
//     .then(() => {
//         res.status(201).send('user created')
//     })
//     .catch((err) => {
//         res.status(400).send('user already exist')
//     })