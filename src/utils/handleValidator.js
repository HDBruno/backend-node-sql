const { validationResult } = require('express-validator');

module.exports.validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        res.status(403).send({ status: "ERROR", detail: err.array() });
    }
}