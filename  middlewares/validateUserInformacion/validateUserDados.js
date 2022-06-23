const { validateName, validateAge } = require('../../helpers/index');

const validateUserDados = (req, res, next) => {
    const { name, age } = req.body;
     
    const errorName = validateName(name);
    const errorAge = validateAge(age);

    if (errorName) return res.status(400).json(errorName);
    if (errorAge) return res.status(400).json(errorAge);

    next();
};

module.exports = validateUserDados;