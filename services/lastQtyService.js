const {Last_qty_update, Rab, Daily, Qty_update_Log} = require('../models');

// 1. kalo daily_id nya 1 maka last qty ambil dari list rab(sama dengan 0).

// 2. kalo daily_id nya lebih dari 1 maka last qty nya ambil dari last qty yang punya daily_id n-1 + qty_update yang punya daily_id n-1

const getAllLastQtyUpdate = async (params) => {
    const daily_id = parseInt(params);

    if(daily_id === 1){
        const getGroupId = await Daily.findAll({
            where:{
                id:daily_id
            }
        });

        const group_id = getGroupId[0].group_id;

        const getQtyUpdateFromRab = await Rab.findAll({
            where:{                                            
                group_id:group_id,
            }
        });

        getQtyUpdateFromRab.map(async (qtyUpdate) => {
            await Last_qty_update.create({
                last_qty_update:qtyUpdate.qty_update,
                daily_id
            }); 
        });

        const getQtyUpdate = await Last_qty_update.findAll({
            where:{
                daily_id
            }
        });

        return getQtyUpdate;

    }else if(daily_id > 1){

        const dailyIdFix = daily_id - 1

        console.log(dailyIdFix);

        const lastQty = await Last_qty_update.findOne({
            where:{
                daily_id:dailyIdFix
            }
        });

        console.log(">>>>>>>>>>>>>>>",lastQty);

        const qtyUpdate = await Qty_update_Log.findOne({
            where:{
                daily_id:dailyIdFix
            }
        });

        console.log("^^^^^^^^^^^^^^^",qtyUpdate);

        const total = lastQty + qtyUpdate;

        return total;
    }else{
        throw new Error('Id not found');
    }
}

module.exports = {
    getAllLastQtyUpdate
}