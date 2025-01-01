const projectService = require('../services/projectService');

const createProject = async (req, res, next) => {
    try{
        const params = {
            ...req.body,
            company_id:req.params.id,
            created_by:req.user.id
        };

        const project = await projectService.createProject(params);
        res.status(201).json(project);

    }catch(error){
        next(error);
    }
}

const getAllProject = async (req, res, next) => {
    try{
        const company_id = req.params.id;

        const project = await projectService.getAllProject(company_id);
        res.status(200).json(project);

    }catch(error){
        next(error);
    }
}

module.exports = {
    createProject,
    getAllProject
}