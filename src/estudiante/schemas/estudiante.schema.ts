import * as mongoose from 'mongoose';
import {semestreSchema} from './semestre.schema';

export const estudianteSchema = new mongoose.Schema({
  nombre: String,
  cedula: String,
  semestre: semestreSchema
}, {
  collection: 'estudiante',
  timestamps: true
});
