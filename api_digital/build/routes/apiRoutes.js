"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiController_1 = __importDefault(require("../controladores/apiController"));
class VotacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/usuarios', apiController_1.default.list_usuarios);
        this.router.get('/usuarios/editar/:id_user', apiController_1.default.usuario);
    }
}
const votacionesRoutes = new VotacionesRoutes();
exports.default = votacionesRoutes.router;
