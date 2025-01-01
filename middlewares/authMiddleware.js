const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    const authHeaders = req.headers['authorization'];
    const token = authHeaders && authHeaders.split(' ')[1];

    if(!token) res.status(401).json({error: 'No token Provided'});

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if(err){
            res.status(403).json({error: 'Failed authenticate token'});
        }
        req.user = decode;
        next();
    });
};

const authorize = () => {
    return(req, res, next) => {
        if(req.user.role !== 'Admin'){
            return res.status(403).json({error: 'Access Denied'});
        }
        next();
    }
}

module.exports = {
    authenticate,
    authorize
}