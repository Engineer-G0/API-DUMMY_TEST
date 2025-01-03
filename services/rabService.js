const {Rab} = require('../models');

const createRab = async (params) => {
    const {group_id, 
            work_items, 
            vol, 
            unit, 
            selling_price, 
            qty_update, 
            status} = params

    const checkRab = await Rab.findOne({
        where:{
            work_items
        }
    });

    if(checkRab) throw new Error('Rab already exist');

    const rab = await Rab.create({
        group_id,
        work_items,
        vol,
        unit,
        selling_price,
        qty_update,
        status
    });
}