import JobOffer from '../../models/JobOffer'

export const findJobById = async(id:string): Promise<JobOffer | undefined> => {
	const jobOffer = await JobOffer.query().findById(id);
	return jobOffer;
}