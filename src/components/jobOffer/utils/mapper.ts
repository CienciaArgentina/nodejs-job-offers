import JobOffer from '../../../models/db/JobOffer'
import { JobOfferDto } from './models'

export const mapperJobOffer = (jobOffer: JobOffer):JobOfferDto => {
	const dto:JobOfferDto = {
		...jobOffer
	}
	return dto
}