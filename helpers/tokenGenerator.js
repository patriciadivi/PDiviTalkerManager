const randomToken = require('./crypto');

const tokenGenerator = () => {
    const token = randomToken();
    return token;
};

module.exports = tokenGenerator;