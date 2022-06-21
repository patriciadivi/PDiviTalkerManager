const validatePassword = (password) => {
    const passwordRegex = /^[0-9a-zA-Z$*&@#]{6,}$/; // 6 caracteres ou mais

    if (!password) return { message: 'O campo "password" é obrigatório' }; 
    if (!+password.length === passwordRegex.test(password)) {
        return { message: 'O "password" deve ter pelo menos 6 caracteres' };
    }
};

module.exports = validatePassword;