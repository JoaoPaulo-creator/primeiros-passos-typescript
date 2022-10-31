import {Router, Request, Response} from 'express';
const router = Router();

import { createMovie, getMovie } from './controllers/movieController'


router.get('/test', async (req: Request, res: Response) => {
    return res.status(200).send({message: 'Ola, mundo'})
})

router.get('/movies', getMovie)
router.post('/movies', createMovie)

export default router
