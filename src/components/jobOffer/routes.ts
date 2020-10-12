import { Request, Response } from 'express';
import { 
  getById,
  createJobOffer
} from './service';
import { HttpStatusCode } from '../../commons/constants';
import { Paths } from './utils'

export default [
  {
    path: Paths.GetById,
    method: 'get',
    handler: [
      async (req: Request, res: Response): Promise<void> => {
        const result = await getById(req.params.id);
        res.status(HttpStatusCode.Ok).send(result);
      },
    ],
  },
  {
    path: Paths.Create,
    method: 'post',
    handler: [
      async ( { body }: Request, res: Response): Promise<void> => {
        const result = await createJobOffer(body);
        res.status(HttpStatusCode.Created).send(result);
      },
    ],
  },
  {
    path: '/ping',
    method: 'get',
    handler: [
      async (req: Request, res: Response): Promise<void> => {
        res.status(HttpStatusCode.Ok).send('pong');
      },
    ],
  },
];
