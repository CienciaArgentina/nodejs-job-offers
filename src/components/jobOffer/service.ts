import { isNullOrUndefined } from 'util';
import { HTTP404Error, HTTP400Error } from '@cienciaargentina/nodejs-backend-commons';
import { findJobById } from './repository';
import JobOffer from '../../models/JobOffer';
import { httpClient } from '../../../httpClient'

export const getById = async (id: string): Promise<JobOffer> => {
  const jobOffer = await findJobById(id);
  if (isNullOrUndefined(jobOffer)) throw new HTTP404Error();
  const host = process.env.CIENCIA_API_HOST || ''
  const request = httpClient(host)
  console.log('HOLA');
  const response = await request.get(`/organizations/${jobOffer.organization_id}`)
  console.log(host)
  console.log(jobOffer)
  console.log(response)
  // jobOffer.organization = response.data


  
  return jobOffer;
};

export const saveJobOffer = async (jobOffer: JobOffer): Promise<number> => {
  //validar cosas dinamicas aca
  const graph = await JobOffer.query()
  .insert(jobOffer)
  return graph.$id()

};