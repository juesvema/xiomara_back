import { Module } from '@nestjs/common';
import { EstudiantesModule } from 'estudiante/estudiante.module';

@Module({
  imports: [EstudiantesModule],
})
export class ApplicationModule {}