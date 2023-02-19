const express = require("express");
const router = express.Router();
const { authMiddleware } = require('../../middlewares/session.js');
const { getUsers, setUser, getUserById, updateUser, deleteUser } = require("../../controllers/userController.js");
const { validatorCreateUser, validatorGetUserById } = require('../../validators/users.js');
const { checkRole } = require("../../middlewares/role.js");

router.get("/users", authMiddleware, checkRole(['USER', 'ADMIN']), getUsers);

router.get("/users/:id", authMiddleware, checkRole(['USER', 'ADMIN']), validatorGetUserById, getUserById);

router.post("/users", authMiddleware, checkRole(['ADMIN']), validatorCreateUser, setUser);

router.put("/users/:id", authMiddleware, checkRole(['ADMIN']), validatorGetUserById, validatorCreateUser, updateUser);

router.delete("/users/:id", authMiddleware, checkRole(['ADMIN']), validatorGetUserById, deleteUser);

module.exports = router;