import JobOffer from '../../../models/db/JobOffer'
import { CreateJobOfferDTO, JobOfferDTO } from './models'

export const mapperJobOfferDTO = (jobOffer: JobOffer):JobOfferDTO => {
	const dto:JobOfferDTO = {
		...jobOffer
	}
	return dto
}

export const mapperCreateFromJobOfferDTO = (jobOfferProps: CreateJobOfferDTO):JobOffer => {
	let jobOffer: JobOffer = Object.assign(
		new JobOffer(),
		{
			is_open: 0,
			...jobOfferProps
		}
	)
	return jobOffer
}