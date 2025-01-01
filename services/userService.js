const {User} = require('../models');

const getAllUser = async (params) => {
    const baseUrl = params;

    const findUser = await User.findAll();

    const newUser = findUser.map(user => {
        user.photo = `${baseUrl}/${user.photo}`;
        return user;
    });

    return newUser;
};

module.exports = {
    getAllUser,
}