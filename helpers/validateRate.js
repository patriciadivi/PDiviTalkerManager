const validateRate = (talk) => {
    if (talk.rate < 1 || talk.rate > 5) {
        return { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };
    }
    if (!talk.rate) return { message: 'O campo "rate" é obrigatório' };
};

module.exports = validateRate;