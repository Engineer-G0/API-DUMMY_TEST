const groupService = require('../services/groupService');

const createGroup = async (req, res, next) => {
    try{
        const params = {
            ...req.body,
            id:req.params.id,
        }

        const group = await groupService.createGroup(params);
        res.status(201).json(group);

    }catch(error){
        next(error);
    }
}

const getAllGroup = async (req, res, next) => {
    try{
        const group = await groupService.getAllGroup(req.params.id);
        res.status(200).json(group);
    }catch(error){
        next(error);
    }
}

module.exports = {
    createGroup,
    getAllGroup
}