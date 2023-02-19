const express = require("express");
const { login, register } = require('../../controllers/authController.js');
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../../validators/auth.js");

router.post("/register", validatorRegister, register);

router.post("/login", validatorLogin, login);

module.exports = router;
