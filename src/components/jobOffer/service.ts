import { notFoundError } from 'ciencia-argentina-backend-commons';
import { findJobById } from './repository';
import JobOffer from '../../models/db/JobOffer';
import { httpClient } from '../../utils/httpClient';
import { mapperJobOffer } from './utils';
import { JobOfferDto } from './utils';

export const getById = async (id: string): Promise<JobOfferDto> => {
  const jobOffer = await findJobById(id);
  if (!jobOffer) throw notFoundError();
  const host = process.env.CIENCIA_API_HOST || '';
  const request = httpClient(host);
  const response = await request.get(`/organizations/${jobOffer.organization_id}`);
  jobOffer.organization = response;
  return mapperJobOffer(jobOffer);
};

export const saveJobOffer = async (jobOffer: JobOffer): Promise<number> => {
  //validar cosas dinamicas aca
  const graph = await JobOffer.query().insert(jobOffer);
  return graph.$id();
};
