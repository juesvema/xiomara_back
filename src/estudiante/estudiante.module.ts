import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { estudianteService } from './estudiante.service';
import { estudiantesController } from './estudiante.controller';
import { estudiantesProviders } from './estudiante.providers';
import { semestreService } from './semestre.service';
import { semestreProviders } from './semestre.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [estudiantesController],
  providers: [estudianteService, semestreService, ...estudiantesProviders, ...semestreProviders],
})
export class EstudiantesModule {}