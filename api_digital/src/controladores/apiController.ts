import { Request, Response} from 'express';

import pool from '../database';

class ApiController {
    
    public async list_usuarios (req: Request, res: Response) {
        await pool.query(
            'SELECT * FROM usuarios',
            (err, usuarios) => {
                if (err) {
                    throw err;
                } else {                    
                    console.log(null, usuarios);
                    JSON.stringify(usuarios);
                    res.json(usuarios);
                    console.log(null, usuarios);
                }
            }
        );
    }

    public async usuario (req: Request, res: Response) {
        await pool.query(
            'SELECT * FROM usuarios where id_user = ? ',
            (err, usuario) => {
                if (err) {
                    throw err;
                } else {                    
                    console.log(null, usuario);
                    JSON.stringify(usuario);
                    res.json(usuario);
                    console.log(null, usuario);
                }
            }
        );
    }

    
}

const apiController = new ApiController();
export default apiController;