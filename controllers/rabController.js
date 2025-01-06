const rabService = require('../services/rabService');

const createRab = async (req, res, next) => {
    try{
        const params = {
            ...req.body,
            user_id:req.user.id,
            group_id:req.params.id,
        }

        const rab = await rabService.createRab(params);
        res.status(201).json(rab);

    }catch(error){
        next(error);
    }
}

const getAllRab = async (req, res, next) => {
    try{
        const rab = await rabService.getAllRab();
        res.status(200).json(rab);
    }catch(error){
        next(error);
    }
}

module.exports = {
    createRab,
    getAllRab
}