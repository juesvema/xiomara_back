import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://xiomara_urrea:xiomara19@ds033196.mlab.com:33196/tallerweb'),
  },
];