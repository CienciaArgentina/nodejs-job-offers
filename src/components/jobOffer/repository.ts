import JobOffer from '../../models/db/JobOffer'

export const findJobById = async(id:string): Promise<JobOffer | undefined> => {
	const jobOffer = await JobOffer.query().findById(id);
	return jobOffer;
}