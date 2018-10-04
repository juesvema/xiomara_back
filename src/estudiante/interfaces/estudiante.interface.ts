import {Document} from 'mongoose';
import {semestre} from './semestre.interface';

export interface Iestudiante extends Document {
  readonly nombre : String;
  readonly cedula : String;
  readonly semestre : semestre;
}