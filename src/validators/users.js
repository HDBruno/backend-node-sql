const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator.js');

module.exports.validatorCreateUser = [
    check("firstName").exists().notEmpty().isLength({ min: 3, max: 30 }),
    check("lastName").exists().notEmpty().isLength({ min: 3, max: 30 }),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({ min: 4, max: 20 }),
    check("role").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

module.exports.validatorGetUserById = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]