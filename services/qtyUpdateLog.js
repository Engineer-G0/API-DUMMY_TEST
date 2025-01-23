const {Qty_update_log, Daily, Rab} = require('../models');

const getQtyUpdate = async (params) => {
    const daily_id = parseInt(params);

    const getDaily = await Daily.findOne({
        where:{
            id:daily_id
        }
    });

    const getRab = await Rab.findAll({
        where:{
            group_id:getDaily.group_id
        }
    });

    const rabLength = getRab.length;

    const qty_update = await Qty_update_log.findAll({
        where:{
            daily_id
        }
    });

    if(!qty_update.length){
        for(let i = 1; i <= rabLength; i++){
            await Qty_update_log.create({
                daily_id,
                qty_update:0
            });
        }
    }
        
    const qty_update2 = await Qty_update_log.findAll({
        where:{
            daily_id
        }
    });

    return qty_update2;
}

const updateQty = async (params) => {
    const {qty_update_id, qty_update} = params;

    const update_qty = await Qty_update_log.update(
        {qty_update},
        {
            where:{
                id:qty_update_id
            }
        }
    );

    if(!update_qty) throw new Error('Failed Update Qty');

    const getQty = await Qty_update_log.findOne({
        where:{
            id:qty_update_id
        }
    });

    return getQty;
}

module.exports = {
    getQtyUpdate,
    updateQty
}