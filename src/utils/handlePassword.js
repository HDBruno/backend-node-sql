const bcryptjs = require('bcryptjs');

const encrypt = async (pwdPlain) => {
    const hash = await bcryptjs.hash(pwdPlain, 10); //el salt es la aleatoriedad de la encriptacion, mientras mas grande mejor, pero es mas lento.
    return hash;
}

const compare = async (pwdPlain, hashPwd) => {
    return await bcryptjs.compare(pwdPlain, hashPwd);
}

module.exports = { encrypt, compare };