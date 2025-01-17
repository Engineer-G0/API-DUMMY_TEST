const {Qty_update_log, Rab, Daily} = require('../models');

const createQtyUpdate = async (params) => {
    const {daily_id, qty_update} = params;

    const qty = await Qty_update_log.create({
        daily_id,
        qty_update
    });

    if(!qty) throw new Error('Failed create qty');

    return qty;
}

const getQtyUpdate = async (params) => {
    const daily_id = params;

    const qty = await Qty_update_log.findAll({
        where:{
            daily_id:parseInt(daily_id)
        }
    });

    if(!qty.length){
        const getGroupId = await Daily.findAll({
            where:{
                id:parseInt(daily_id)
            }
        });

        const qtyUpdates = await Rab.findAll({
            where:{
                group_id:getGroupId[0].group_id
            }
        });

        // return qtyUpdates;

        const gokil = qtyUpdates.map((qtyUpdate) => {
            return qtyUpdate.qty_update;
        });

        return gokil;
    }else{
        return qty;
    }

}

module.exports = {
    createQtyUpdate,
    getQtyUpdate
}