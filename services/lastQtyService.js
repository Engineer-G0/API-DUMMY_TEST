const {Last_qty_update, Rab, Daily, Qty_update_log} = require('../models');

// 1. kalo daily_id nya 1 maka last qty ambil dari list rab(sama dengan 0).

// 2. kalo daily_id nya lebih dari 1 maka last qty nya ambil dari last qty yang punya daily_id n-1 + qty_update yang punya daily_id n-1

const getLastQtyUpdate = async (params) => {
    const daily_id = parseInt(params);

    const getDaily = await Daily.findOne({
        where:{
            id:daily_id
        }
    });

    if(getDaily.day_at === 1){

        const last_qty_update = 0;

        const getRabByGroupId = await Rab.findAll({
            where:{
                group_id:getDaily.group_id
            }
        });

        const rabLength = getRabByGroupId.length;

        const qty_update = await Last_qty_update.findAll({
            where:{
                daily_id
            }
        });
        
        if(!qty_update.length){
            for(let i = 1; i <= rabLength; i++){
                await Last_qty_update.create({
                    daily_id,
                    group_id:getDaily.group_id,
                    last_qty_update
                });
            }
        }

        const getLasqty = await Last_qty_update.findAll({
            where:{
                group_id:getDaily.group_id
            }
        });

        return getLasqty;

    }else if(getDaily.day_at > 1){

        const dailyIdFix = daily_id - 1

        const getGroupId = await Daily.findOne({
            where:{
                id:daily_id
            }
        });

        const group_id = getGroupId.group_id;

        console.log(group_id);

        const lastQty = await Last_qty_update.findAll({
            where:{
                daily_id:dailyIdFix
            }
        });

        const qtyUpdate = await Qty_update_log.findAll({
            where:{
                daily_id:dailyIdFix
            }
        });

        const total = lastQty[0].dataValues.last_qty_update + qtyUpdate[0].dataValues.qty_update;

        const getNextLastQty = await Last_qty_update.findAll({
            where:{
                daily_id,
                group_id
            }
        });

        console.log(getNextLastQty);

        if(!getNextLastQty.length){
            await Last_qty_update.create({
                daily_id,
                group_id,
                last_qty_update:total
            });
        }

        const getNextLastQtyz = await Last_qty_update.findAll({
            where:{
                group_id
            }
        });

        return getNextLastQtyz;

    }else{
        throw new Error('Id not found');
    }
}

module.exports = {
    getLastQtyUpdate
}