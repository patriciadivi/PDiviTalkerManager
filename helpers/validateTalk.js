const validateTalk = (talk) => {
    if (!talk) return { message: 'O campo "talk" é obrigatório' };
};

module.exports = validateTalk;