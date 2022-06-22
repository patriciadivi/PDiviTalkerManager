const { validateTalk } = require('../../helpers/index');

const validateUserTalk = (req, res, next) => {
    const { talk } = req.body;
    // talk: { watchedAt, rate } 

    const errorTalk = validateTalk(talk);
    if (errorTalk) return res.status(400).json(errorTalk);

    next();
};

module.exports = validateUserTalk;