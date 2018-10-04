import {Document} from 'mongoose';

export interface semestre extends Document {
  nombreMaterias : string[];
  codigo_id : number;
}