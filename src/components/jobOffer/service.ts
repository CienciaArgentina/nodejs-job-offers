import { isNullOrUndefined } from 'util';
import { HTTP404Error, HTTP400Error } from 'ciencia-argentina-backend-commons';
import { findJobById } from './repository';
import JobOffer from '../../models/db/JobOffer';
import { httpClient } from '../../utils/httpClient'
import { mapperJobOffer } from './utils'
import { JobOfferDto } from './utils';

export const getById = async (id: string): Promise<JobOfferDto> => {
  const jobOffer = await findJobById(id);
  if (isNullOrUndefined(jobOffer)) throw new HTTP404Error();
  const host = process.env.CIENCIA_API_HOST || ''
  const request = httpClient(host)
  const response = await request.get(`/projects/${jobOffer.project_id}`)
  jobOffer.project = response
  return mapperJobOffer(jobOffer);
};

export const saveJobOffer = async (jobOffer: JobOffer): Promise<number> => {
  //validar cosas dinamicas aca
  const graph = await JobOffer.query()
  .insert(jobOffer)
  return graph.$id()

};