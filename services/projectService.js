const {Project, Type_report_s_curve} = require('../models');

const createProject = async (params) => {
    try{

        const{company_id,
            name, 
            description, 
            start_date, 
            end_date,
            } = params;
    
        const checkProject = await Project.findOne({
            where:{
                name
            }
        });
        
        if(checkProject) throw new Error('Project already existed');
        
        const project = await Project.create({
            company_id,
            name,
            description,
            start_date,
            end_date,
        });
        
        if(!project) throw new Error('Failed create project');
        
        const type_reports = [
            'List RAB',
            'General RAB',
            'History RAB Update',
            'Daily Progress Actual'
        ];
    
        await Promise.all(
            type_reports.map((type_report) => (
                Type_report_s_curve.create({
                    type_report,
                    project_id:project.id,
                    company_id:project.company_id
                })
            )
        ));
    
        return {
            project
        };
    } catch(error){
        throw new Error(error.message);
    }
}

const getAllProject = async (params) => {
    const company_id = params;

    const projects = await Project.findAll({
        where:{
            company_id  
        }
    });
    if(!projects) throw new Error('There is no project exist');
    
    return projects;
}

module.exports = {
    createProject,
    getAllProject
}