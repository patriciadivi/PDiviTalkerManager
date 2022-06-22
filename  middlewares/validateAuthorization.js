// Autenticação atravez do Token
const randomToken = require('../helpers/crypto');

const validateAuthorization = () => {
    const token = randomToken();
    return token;
};

module.exports = validateAuthorization;