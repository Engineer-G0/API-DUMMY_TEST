const typeReportService = require('../services/type_report_s_curve');

const getAllTypeReport = async (req, res, next) => {
    try{
        const typeReport = await typeReportService.getAllTypeReport(req.params.id);
        res.status(200).json(typeReport);
    }catch(error){
        next(error);
    }
}

module.exports = {
    getAllTypeReport
};