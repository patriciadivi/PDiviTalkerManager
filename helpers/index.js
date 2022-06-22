const validateName = require('./validateName');
const validateAge = require('./validateAge');
const validateTalk = require('./validateTalk');
const validateWatchedAt = require('./validateWatchedAt');
const validateRate = require('./validateRate');
const cypto = require('./crypto');
const read = require('./read');
const tokenGenerator = require('./tokenGenerator');
const tokenRead = require('./tokenRead');
const tokenWrite = require('./tokenWrite');
const write = require('./write');

module.exports = {
    cypto,
    read,
    tokenGenerator,
    tokenRead,
    tokenWrite,
    validateName,
    validateAge,
    validateTalk,
    validateWatchedAt,
    validateRate,
    write,
};