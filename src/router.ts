import {Router, Request, Response} from 'express';
const router = Router();

import { createMovie, findMovieById, getAllMovies, deleteMovieById } from './controllers/movieController'
import validator from './middleware/handleValidation';
import movieCreationValidator from './middleware/movieValidaton';


router.get('/test', async (req: Request, res: Response) => {
    return res.status(200).send({message: 'Ola, mundo'})
})

router.get('/movies', getAllMovies)
router.get('/movies/:id', findMovieById)
router.post('/movies', movieCreationValidator(), validator, createMovie)
router.delete('/movies/:id', deleteMovieById)



export default router
