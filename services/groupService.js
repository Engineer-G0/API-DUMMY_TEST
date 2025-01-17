const {Group, Type_report_s_curve, Project, Daily} = require("../models");
const dayjs = require("dayjs");

const createGroup = async (params) => {
    const{id, group_name} = params;

    const getprojectId = await Type_report_s_curve.findOne({
        where:{
            id
        }
    });

    if(!getprojectId.project_id) throw new Error('Project not found');

    const getCompanyId = await Project.findOne({
        where:{
            id:getprojectId.project_id
        }
    });

    if(!getCompanyId) throw new Error('Company not found');

    const group = await Group.create({
        company_id:getCompanyId.company_id,
        project_id:getprojectId.project_id,
        type_report_s_curve_id:parseInt(id),
        group_name,
    });

    if(!group) throw new Error('Failed create group');

    const getProject = await Project.findOne({
        where:{
            id:group.project_id
        }
    });

    const startDate = dayjs(getProject.start_date);
    const endDate = dayjs(getProject.end_date);

    const days = endDate.diff(startDate, "day");

    for(let i = 1; i <= days; i++){
        await Daily.create({
            group_id:group.id
        });
    }

    return group;
}

const getAllGroup = async (params) => {
    const id = params;

    const getProjectId = await Type_report_s_curve.findOne({
        where:{
            id
        }
    });

    if(!getProjectId) throw new Error('project id not found');

    const group = await Group.findAll({
        where:{
            project_id:getProjectId.project_id
        }
    });

    if(!group) throw new Error('Group not found');

    return group;
}

module.exports = {
    createGroup,
    getAllGroup
}
