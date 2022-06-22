const validateTalk = (talk) => {
    console.log(talk);
    console.log(!talk);
    if (!talk) return { message: 'O campo "talk" é obrigatório' };
};

module.exports = validateTalk;