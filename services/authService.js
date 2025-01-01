const {User} = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async (params) => {
    const {username, email, password, photo} = params;

    const checkUser = await User.findOne({
        where:{
            email
        }
    });

    if(checkUser) throw new Error('Email has register');

    const hashPassword = await bcrypt.hash(password, 10);

    const regis = await User.create({
        username,
        email,
        password: hashPassword,
        photo
    });

    if(!regis) throw new Error('Failed register new account');

    return regis;
}

const login = async (params) => {
    const {email, password} = params;
    
    const checkUser = await User.findOne({
        where:{
            email
        }
    });

    if(!checkUser) throw new Error('User Not Found');


    const validPassword = await bcrypt.compare(password, checkUser.password);
    if(!validPassword) throw new Error('Invalid Credentials');

    const token = jwt.sign({
        id:checkUser.id,
    }, process.env.JWT_SECRET, {expiresIn: '1h'});

    return {token};
}

module.exports = {
    register,
    login
};