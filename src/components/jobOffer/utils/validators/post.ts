import { postJobOfferBody } from '../schemas/postJobOfferBody';
import { CreateJobOfferDTO } from '../models';
import { validateJsonSchema, HTTPCienciaError } from 'ciencia-argentina-backend-commons';

export const validateCreateJobOffer = (jobOfferDTO: CreateJobOfferDTO): HTTPCienciaError | null => {
  return validateJsonSchema(postJobOfferBody, jobOfferDTO, 'example message');
};
