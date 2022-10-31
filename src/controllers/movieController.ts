import { Request, Response } from "express"
import { MovieModel } from '../models/Movie'
import Logger from '../../config/logger'

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(201).send({message: movie})
    } catch (error) {
        Logger.error(`Erro no sistema: ${error.message}`)
    }
}


export async function getMovie(req: Request, res: Response) {
    try {
        const movies = MovieModel.find()
        return res.status(200).send(movies)
    } catch (error) {
        Logger.error(`Erro while searching for movie: ${error.message}`)
    }    
}