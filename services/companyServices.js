const {Company} = require('../models');

const createCompany = async (params) => {

    const {name, description, logo} = params;

    const checkCompany = await Company.findOne({
        where:{
            name
        }
    });

    if(checkCompany) throw new Error('company is exist');

    const newCompany = await Company.create({
        name,
        description,
        logo
    });

    if(!newCompany) throw new Error('Failed create company');

    return newCompany;

};


const getAllCompany = async () => {

    const finCompanies = await Company.findAll();

    if(!finCompanies) throw new Error('No company exist');

    return finCompanies;
}


const getCompanyById = async (params) => {
    const id = params;

    const findCompany = await Company.findOne({
        where:{
            id
        }
    });

    if(!findCompany) throw new Error('Company not found');

    return findCompany;
}

module.exports = {
    createCompany,
    getAllCompany,
    getCompanyById
}