import { Connection } from 'mongoose';
import { estudianteSchema } from './schemas/estudiante.schema';

export const estudiantesProviders = [
  {
    provide: 'estudiante',
    useFactory: (connection: Connection) => connection.model('estudiante', estudianteSchema),
    inject: ['DbConnectionToken'],
  },
];