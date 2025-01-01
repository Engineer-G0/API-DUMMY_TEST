const authServices = require('../services/authService');

const register = async (req, res, next) => {
    try{
        const params = {
            ...req.body,
            photo: req.file ? req.file.path.replace(/\\/g, '/') : null
        };

        const regis = await authServices.register(params);

        regis.photo = `${req.protocol}://${req.get('host')}/${regis.photo}`;

        res.status(201).json(regis);

    }catch(error){
        next(error);
    }
}

const login = async (req, res, next) => {
    try{
        const {token} = await authServices.login(req.body);
        res.json({token});

    }catch(error){
        next(error)
    }
}

module.exports = {
    register,
    login
}