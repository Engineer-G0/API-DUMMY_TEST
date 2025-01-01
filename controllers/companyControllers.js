const companyServices = require('../services/companyServices');

const createCompany = async (req, res, next) => {
    try{
        const params = {
            ...req.body,
            logo:req.file ? req.file.path.replace(/\\/g, '/') : null
        }

        const newCompany = await companyServices.createCompany(params);
        newCompany.logo=`${req.protocol}://${req.get('host')}/${newCompany.logo}`;

        return res.status(201).json(newCompany);

    }catch(error){
        next(error)
    }
    
}

const getAllCompany = async (req, res, next) => {
   
    try{
        const findCompany = await companyServices.getAllCompany();
        return res.status(200).json(findCompany);

    }catch(error){
        next(error);
    } 
}

const getCompanyById = async (req, res, next) => {

    try{
        const findCompany = await companyServices.getCompanyById(req.params.id);
        return res.status(200).json(findCompany);

    }catch(error){
        next(error);
    }
}

module.exports = {
    createCompany,
    getAllCompany,
    getCompanyById
}