import { model, Schema} from 'mongoose'

const movieSchema = new Schema(
        {
            title: String,
            rating: Number,
            description: String,
            director: String,
            stars: Array,
            poster: String
        },
        {
            timestamps: true
        }
    )

export const MovieModel = model('Movie', movieSchema)
