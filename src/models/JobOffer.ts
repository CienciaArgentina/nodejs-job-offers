import { TableNames } from '../commons/constants';
import { Model } from 'objection';

export default class JobOffer extends Model {
  id!: number;
  description!: string;
  dateCreated!: Date;
  dateDeleted?: Date;

  static tableName = TableNames.JobOffer;
}
