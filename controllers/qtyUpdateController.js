const qtyUpdate = require('../services/qtyUpdateLog');

const createQty = async (req, res, next) => {
    try{
        const params = {
            daily_id:req.params.id,
            qty_update:req.body.qty_update
        }

        const qty = await qtyUpdate.createQtyUpdate(params);

        res.status(201).json(qty);

    }catch(error){
        next(error);
    }
}

const getQtyUpdate = async (req, res, next) => {
    try{
        const qty = await qtyUpdate.getQtyUpdate(req.params.id);
        res.status(200).json(qty);
    }catch(error){
        next(error)
    }
}

module.exports = {
    createQty,
    getQtyUpdate
}