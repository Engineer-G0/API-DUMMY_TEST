const {Type_report_s_curve} = require('../models');

const getAllTypeReport = async (params) => {
    const project_id = parseInt(params);

    const type_reports = await Type_report_s_curve.findAll({
        where:{
            project_id
        }
    });

    if(!type_reports) throw new Error('No type report exist');

    return type_reports;
}

module.exports = {
    getAllTypeReport
};