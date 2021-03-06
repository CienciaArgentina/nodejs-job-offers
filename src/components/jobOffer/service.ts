import { isNullOrUndefined } from 'util';
import { HTTP404Error, HttpValidationError } from 'ciencia-argentina-backend-commons';
import { findJobById } from './repository';
import JobOffer from '../../models/db/JobOffer';
import { httpClient } from '../../utils/httpClient'
import {
  CreateJobOfferDTO,
  JobOfferDTO,
  mapperCreateFromJobOfferDTO,
  mapperJobOfferDTO
} from './utils'
import  { validateCreateJobOffer } from './utils/validators/post'

export const getById = async (id: string): Promise<JobOfferDTO> => {
  const jobOffer = await findJobById(id);
  if (isNullOrUndefined(jobOffer)) throw new HTTP404Error();
  const host = process.env.CIENCIA_API_HOST || ''
  const request = httpClient(host)
  const response = await request.get(`/projects/${jobOffer.project_id}`)
  jobOffer.project = response
  return mapperJobOfferDTO(jobOffer);
};

export const saveJobOffer = async (jobOffer: JobOffer): Promise<number> => {
  //validar cosas dinamicas aca
  const graph = await JobOffer.query()
  .insert(jobOffer)
  return graph.$id()

};

interface JobOfferCreated {
  id: number
}

export const createJobOffer = async (jobOfferDTO: CreateJobOfferDTO): Promise<JobOfferCreated> => {
  const errors = validateCreateJobOffer(jobOfferDTO);
  
  if(errors) throw new HttpValidationError(errors);
  
  const jobOffer = mapperCreateFromJobOfferDTO(jobOfferDTO)
  const id = await saveJobOffer(jobOffer);
  const response : JobOfferCreated = {
    id
  }
  return response;
}