const dailyService = require('../services/dailyService');

const getAllDailyById = async (req, res, next) => {
    try{
        const daily = await dailyService.getAllDailyById(req.params.id);
        res.status(200).json(daily);
    }catch(error){
        next(error);
    }
}

module.exports = {
    getAllDailyById
}