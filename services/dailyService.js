const {Daily} = require('../models');

const getAllDailyById = async (params) => {
    const group_id = params;
    
    const daily = await Daily.findAll({
        where:{
            group_id:parseInt(group_id)
        }
    });

    if(!daily) throw new Error('Daily progress not exist');

    return daily;
}

module.exports = {
    getAllDailyById
}