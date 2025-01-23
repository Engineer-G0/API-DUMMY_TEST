const qtyUpdate = require('../services/qtyUpdateLog');

const updateQty = async (req, res, next) => {
    try{
        const params = {
            qty_update_id:req.params.id,
            qty_update:req.body.qty_update
        }

        const qty = await qtyUpdate.updateQty(params);

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
    updateQty,
    getQtyUpdate
}