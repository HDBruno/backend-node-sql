const { userModel } = require("../models");
const { matchedData } =  require('express-validator');
const handleHttpErrors = require('../utils/handleErrors.js');

module.exports.getUsers = async (req, res) => {
    try{
        const data = await userModel.find({})
        res.status(200).send(data);
    } catch(e) {
        handleHttpErrors(res, "ERROR al obtener usuarios.", 400);
    }
}

module.exports.getUserById = async (req, res) => {
    try{
        const { id } = matchedData(req);
        const data = await userModel.findById(id)
        res.status(200).send(data);
    } catch(e) {
        handleHttpErrors(res, `ERROR al obtener el usuario con id: ${id}.`, 400);
    }
}

module.exports.setUser = async (req, res) => {
    try{
        const body = matchedData(req); //tre solamente la info del modelo
        const data = await userModel.create(body);
        res.status(200).send(data);
    } catch(e) {
        handleHttpErrors(res, "ERROR al crear un usuario.", 400);
    }
}

module.exports.updateUser = async (req, res) => {
    try{
        const { id, ...body } = matchedData(req); //separa el id del body
        const data = await userModel.findOneAndUpdate(id, body);
        res.status(200).send(data);
    } catch(e) {
        handleHttpErrors(res, "ERROR al actualizar un usuario.", 400);
    }
}

module.exports.deleteUser = async (req, res) => {
    try{
        const { id } = matchedData(req);
        const data = await userModel.deleteOne({ _id: id })
        res.status(200).send(data);
    } catch(e) {
        handleHttpErrors(res, `ERROR al eliminar el usuario con id: ${id}.`, 400);
    }
}
