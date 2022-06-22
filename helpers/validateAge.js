const validateAge = (age) => {
    if (!age) return { message: 'O campo "age" é obrigatório' };
    if (age < 18) return { message: 'A pessoa palestrante deve ser maior de idade' };
};

module.exports = validateAge;