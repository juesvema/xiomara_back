import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Iestudiante } from './interfaces/estudiante.interface';
import { estudianteDTO } from './dto/estudiante.dto';

@Injectable()
export class estudianteService {
  constructor(@Inject('estudiante') private readonly estudianteModel: Model<Iestudiante>) {}

  async create(estudianteDTO: estudianteDTO): Promise<Iestudiante> {
    const createdCat = new this.estudianteModel(estudianteDTO);
    return await createdCat.save();
  }

  async findAll(): Promise<Iestudiante[]> {
    return await this.estudianteModel.find().exec();
  }

}