const userService = require('../services/userService');

const getAllUser = async (req, res, next) => {
    try{
        const params = {
            baseUrl:`${req.protocol}://${req.get('host')}`
        }

        const user = await userService.getAllUser(params.baseUrl);
        res.status(200).json(user);

    }catch(error){
        next(error);
    }
}

module.exports = {
    getAllUser,
}