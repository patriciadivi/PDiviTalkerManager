const validateName = (name) => {
    if (!name) return { message: 'O campo "name" é obrigatório' };
    if (name.length < 3) {
        return { message: 'O "name" deve ter pelo menos 3 caracteres' };
    }
};

module.exports = validateName;