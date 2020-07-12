import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export default class JobOffer extends Model {
  id!: number
  is_open!: boolean
  title!: string
  description!: string
  research_topics!: string
  experimental_model!: string
  //
  contact_email!: string
  project_manager!: string
  presentation_letter!: boolean
  //
  career_state!: number
  lab_experience!: string
  end_career_date_estimated!: string
  requirements_summary!: string
  requirements_optionals!: string
  //
  project_id!: number

  static tableName = TableNames.JobOffer;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        //read_only
        id: { type:'integer', read_only:true },
        is_open: {type:'boolean', read_only:true},
        //text variables
        title: { type:'string', minLength: 1, maxLength: 100 },
        description: { type:'string', minLength: 1, maxLength: 1000 },
        research_topics: { type:'string', minLength: 1, maxLength: 1000 },
        experimental_model: { type:['string', 'null'], minLength: 1, maxLength: 1000 },
        //other
        contact_email: { type:'string', format:'email' },
        project_manager: { type:'string', minLength: 1, maxLength: 1000  },
        presentation_letter: { type:'boolean' },
        //requirements
        career_state: { type:'integer', enum:[1, 2, 3] },
        lab_experience: { type:'boolean' },
        end_career_date_estimated: { type:['string', 'null'], format: "date-time" },
        requirements_summary: { type:'string', minLength: 1, maxLength: 500 },
        requirements_optionals: { type:'string', minLength: 1, maxLength: 500 },
        //relations
        project_id: { type:'integer' }
      }
    }
  }

  static modifiers = {
    defaultSelects(query:any) {
      const { ref } = JobOffer
      query.select(
        ref('id'),
        ref('title'),
        ref('description'),
        ref('research_topics'),
        ref('experimental_model'),
        ref('is_open'),
        ref('possible_scolarship'),
        ref('scolarship'),
        ref('salary'),
        ref('end_offer'),
        ref('contact_email'),
        ref('project_manager'),
        ref('presentation_letter'),
        ref('career_state'),
        ref('end_career_date_estimated'),
        ref('lab_experience'),
        ref('requirements_summary'),
        ref('requirements_optionals'),
      )
    }
  }



}
