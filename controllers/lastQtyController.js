const lastQtyService = require('../services/lastQtyService');

const getAllLastQtyUpdate = async (req, res, next) => {
    try{
        const lastQty = await lastQtyService.getLastQtyUpdate(req.params.id);
        res.status(200).json(lastQty);
    }catch(error){
        next(error);
    }
}

module.exports = {
    getAllLastQtyUpdate
}