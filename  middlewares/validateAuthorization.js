// Autenticação atravez do Token
const tokenRead = require('../helpers/tokenRead');

const validateAuthorization = async (req, res, next) => {
    const token = await tokenRead();
    // console.log(token);
    const { authorization } = req.headers;
    // console.log(authorization);

    if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });

    if (token !== authorization) {
        return res.status(401).json({ message: 'Token inválido' });
    }

    next();
};

module.exports = validateAuthorization;