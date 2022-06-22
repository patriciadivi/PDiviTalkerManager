const validateLogin = require('../helpers/validateLogin');
const validatePassword = require('../helpers/validatePassword');

const validateUser = (req, res, next) => {
    const { email, password } = req.body;
    
    const errorEmail = validateLogin(email);
    const errorPassword = validatePassword(password);

    if (errorEmail) return res.status(400).json(errorEmail);
    if (errorPassword) return res.status(400).json(errorPassword);

    next();
};

module.exports = validateUser;