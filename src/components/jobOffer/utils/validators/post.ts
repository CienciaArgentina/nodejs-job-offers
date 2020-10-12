import { postJobOfferBody } from '../schemas/postJobOfferBody'
import { CreateJobOfferDTO } from '../models'
import { ValidationError, validateJsonSchema } from 'ciencia-argentina-backend-commons'

export const validateCreateJobOffer = (jobOfferDTO: CreateJobOfferDTO): ValidationError | null => {
    return validateJsonSchema(postJobOfferBody,jobOfferDTO,'example message');
};