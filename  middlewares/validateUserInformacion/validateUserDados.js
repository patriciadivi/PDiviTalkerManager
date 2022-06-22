const { validateName, validateAge } = require('../../helpers/index');

const validateUserDados = (req, res, next) => {
    const { name, age } = req.body;
     
    const errorName = validateName(name);
    const errorAge = validateAge(age);
    
    const validateAllParams = [errorName, errorAge];

    validateAllParams.forEach((error) => {
            if (error) return res.status(400).json(error);
    });

    next();
};

module.exports = validateUserDados;