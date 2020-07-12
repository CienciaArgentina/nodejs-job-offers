import { isNullOrUndefined } from 'util';
import { HTTP404Error } from '@cienciaargentina/nodejs-backend-commons';
import { findJobById } from './repository';
import JobOffer from '../../models/JobOffer';

export const getById = async (id: string): Promise<JobOffer> => {
  const jobOffer = await findJobById(id);
  if (isNullOrUndefined(jobOffer)) throw new HTTP404Error();

  return jobOffer;
};
