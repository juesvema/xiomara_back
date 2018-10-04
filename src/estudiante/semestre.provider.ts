import { Connection } from 'mongoose';
import { semestreSchema } from './schemas/semestre.schema';

export const semestreProviders = [
  {
    provide: 'semestre',
    useFactory: (connection: Connection) => connection.model('semestre', semestreSchema),
    inject: ['DbConnectionToken'],
  },
];