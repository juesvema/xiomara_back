import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { semestre } from './interfaces/semestre.interface';

@Injectable()
export class semestreService {
  constructor(@Inject('semestre') private readonly semestreModel: Model<semestre>) {}

  async findByCode(codigo): Promise<semestre> {
    return await this.semestreModel.findOne({codigo_id: codigo}).exec();
  }
}