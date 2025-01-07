const {Total} = require('../models');

const getTotalByGroupId = async (params) => {
    const group_id = params;

    const total = await Total.findAll({
        where:{
            group_id:parseInt(group_id),
        }
    });

    let totalSum = 0;
    if(total.length > 1){
        totalSum = total.reduce((accumulator, item) => accumulator + (item.total || 0), 0);
    }else{
        totalSum = total[0].total || 0;
    }

    return {totalSum};
}

module.exports = {
    getTotalByGroupId
}