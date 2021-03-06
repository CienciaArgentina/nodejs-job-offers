export interface JobOfferDTO {
	id: number
	is_open: boolean
	title: string
	description: string
	research_topics: string
	experimental_model: string
	//
	contact_email: string
	project_manager: string
	presentation_letter: boolean
	//
	career_state: number
	lab_experience: number
	end_career_date_estimated: string
	requirements_summary: string
	requirements_optionals: string
	//
	project_id: number
	//
	project: object
}

export interface CreateJobOfferDTO {
	title: string
	description: string
	research_topics: string
	experimental_model: string | null
	//
	contact_email: string
	project_manager: string
	presentation_letter: boolean
	//
	career_state: number
	lab_experience: number
	end_career_date_estimated: string
	requirements_summary: string
	requirements_optionals: string
	//
	project_id: number
}