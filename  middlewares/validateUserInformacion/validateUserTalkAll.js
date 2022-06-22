const { validateRate, validateWatchedAt } = require('../../helpers/index');

const validateUserTalkAll = (req, res, next) => {
    const { talk } = req.body;
    // talk: { watchedAt, rate } 

    const errorWatchedAt = validateWatchedAt(talk);
    const errorRate = validateRate(talk);
    
    if (errorRate) return res.status(400).json(errorRate);
    if (errorWatchedAt) return res.status(400).json(errorWatchedAt); 

    next();
};

module.exports = validateUserTalkAll;