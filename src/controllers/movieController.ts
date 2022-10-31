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


export async function findMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id
        const movie = await MovieModel.findById(id)
       
        if(!movie) {
            return res.status(404).send({message: 'Movie not found'})
        }
        
        return res.status(200).json(movie)
        
    } catch (error) {
        Logger.error(`Erro while searching for movie: ${error.message}`)
    }    
}


export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find()
        if(!movies){
            return res.status(404).send({message: 'Movie list not found'})            
        }

        return res.status(200).json(movies)

    } catch (error) {
        Logger.error(`Erro while searching for movies: ${error.message}`)
    }
}

export async function deleteMovieById(req: Request, res: Response) {
    try {
        
        const id = req.params.id
        const movie = await MovieModel.findById(id)

        if(!movie){
            return res.status(404).send({message: 'Movie not found'})
        }

        // perform delete
        await movie.delete()
        return res.status(200).json({message: 'Movie deleted successfully'})


    } catch (error) {
        Logger.error(`Erro while searching for movie: ${error.message}`)
    }
}