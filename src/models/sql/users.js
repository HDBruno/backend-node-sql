const { sequelize } = require('../../database/sql');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
    "users",
    {
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.ENUM(["USER", "ADMIN"]), default: "USER" }
    },
    {
        //versionKey: false,
        timestamps: true
    }
);

module.exports = User;







/*
const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const userScheme = new mongoose.Schema(
    {
        email: { type: String, unique: true, required: true },
        pwd: { type: String, required: true },
        role: { type: ["USER", "ADMIN"], default: "USER" }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

userScheme.plugin(mongooseDelete, { overrideMethods: true, deletedAt: true }); //con este plugin se puede hacer soft delete
module.exports = mongoose.model("users", userScheme);
*/