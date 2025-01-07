const totalService = require('../services/totalService');

const getTotalByGroupId = async (req, res, next) => {
    try{
        const rab = await totalService.getTotalByGroupId(req.params.id);
        res.status(200).json(rab);
    }catch(error){
        next(error);
    }
}

module.exports = {
    getTotalByGroupId
}