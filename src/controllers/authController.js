const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword.js");
const { tokenSign } = require("../utils/handleJWT.js");
const { userModel } = require("../models");
const { handleHttpErrors } = require("../utils/handleErrors.js");

module.exports.register = async (req, res) => {
  try {
    const body = matchedData(req);
    const hashedPwd = await encrypt(body.password);
    const newBody = { ...body, password: hashedPwd };
    const userData = await userModel.create(newBody);
    res.status(200).send({
      status: "OK",
      data: "El usuario se ha creado.",
      token: await tokenSign(userData),
    });
  } catch (err) {
    handleHttpErrors(res, "NO se ha podido crear el usuario.", 400);
    console.log(err);
  }
};

module.exports.login = async (req, res) => {
  try {
    const body = matchedData(req); // solamente deja la data q corresponda al modelo de datos
    
    const user = await userModel.findOne({ email: body.email });

    if (!user) {
      handleHttpErrors(res, "Usuario inexistente.", 404);
      return;
    }
    
    const hashedPwd = user.password;
    const check = await compare(body.password, hashedPwd);
    
    if (!check) {
      handleHttpErrors(res, "Password NO valido.", 401);
      return;
    }
    
    user.set('password', undefined, { strict: false }); // hace q no devuelva el password en la info del usuario.

    const data = {
      status: "OK",
      token: await tokenSign(user)
    };
    
    res.status(200).send({ data });
  } catch (err) {
    handleHttpErrors(res, "ERROR al loguear al usuario.", 400);
    console.log(err);
  }
};
