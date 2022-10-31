import { body } from 'express-validator'

function movieCreationValidator(){
    return [
        body('title')
        .isString()
        .withMessage('O título é obrigatório')
        .isLength({min: 5})
        .withMessage('O titulo conter ao menos 5 caracteres'),

        body('rating')
        .isNumeric()        
        .withMessage('A nota precisa ser um número')
        // criando uma validação com a info do body
        .custom((value: number) =>{
            if( value < 0 || value > 5){
                throw new Error('A nota precisa ser entre 0 e 5')
            }
            return true
        }),
        body('description').isString().withMessage('A descrição é obrigatória'),
        body('director').isString().withMessage('O nome do diretor deve ser informado'),
        body('poster').isURL().withMessage('A imagem precisa ser uma URL')
    ]
}


export default movieCreationValidator
