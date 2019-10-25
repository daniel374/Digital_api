import { Router } from 'express';

import apiController from '../controladores/apiController';

class VotacionesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/usuarios', apiController.list_usuarios);
        this.router.get('/usuarios/editar/:id_user', apiController.usuario);
    }

}

const votacionesRoutes = new VotacionesRoutes();
export default votacionesRoutes.router;