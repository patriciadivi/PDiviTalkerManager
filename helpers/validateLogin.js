const validateLogin = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

    if (!email) return { message: 'O campo "email" é obrigatório' };

    if (!emailRegex.test(email)) {
        return { message: 'O "email" deve ter o formato "email@email.com"' };
    }
};

module.exports = validateLogin;