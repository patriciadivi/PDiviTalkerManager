const validateWatchedAt = (talk) => {
    const validateformatDate = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;

    if (!talk.watchedAt) return { message: 'O campo "watchedAt" é obrigatório' };
    if (!validateformatDate.test(talk.watchedAt)) {
        return { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };
    }
};

module.exports = validateWatchedAt;