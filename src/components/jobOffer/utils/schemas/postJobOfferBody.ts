import { JSONSchema7 } from 'json-schema'

export const postJobOfferBody: JSONSchema7 = {
  type: 'object',
  properties: {
    title: {
      type: 'string'
	},
	description: {
		type: 'string'
	},
	research_topics: {
		type: 'string'
	},
	experimental_model: {
		type: 'string'
	},
	contact_email: {
		type: 'string',
		format: 'email'
	},
	project_manager: {
		type: 'string'
	},
	presentation_letter: {
		type: 'boolean'
	},
	career_state: {
		type: 'number',
		enum: [0,1,2,3] // no pedir,  cursando, por terminar, finalizada
	},
	lab_experience: {
		type: 'number',
		enum: [0,1,2] // no pedir, preferente, obligatorio
	},
	end_career_date_estimated: {
		type: 'string',
		format: 'date'
	},
	requirements_summary: {
		type: 'string',
		maxLength: 300
	},
	requirements_optionals: {
		type: 'string',
		maxLength: 300
	},
	project_id: {
		type: 'number'
	},
  },
  required: [
	'title',
	'description',
	'research_topics',
	'experimental_model',
	'contact_email',
	'project_manager',
	'presentation_letter',
	'career_state',
	'lab_experience',
	'end_career_date_estimated',
	'requirements_summary',
	'requirements_optionals',
	'project_id'
  ]
}