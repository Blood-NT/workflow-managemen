"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskmessagesModel = void 0;
const sequelize_1 = require("sequelize");
const connectDB_1 = __importDefault(require("../config/connectDB"));
exports.taskmessagesModel = connectDB_1.default.define("taskmessages", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    taskid: sequelize_1.DataTypes.STRING(500),
    messages: sequelize_1.DataTypes.STRING(500),
    createAt: sequelize_1.DataTypes.DATE,
    sender: sequelize_1.DataTypes.STRING(20),
    type: sequelize_1.DataTypes.STRING(20),
}, {
    timestamps: false,
    tableName: "taskmessages",
});
//# sourceMappingURL=taskmessages.model.js.map