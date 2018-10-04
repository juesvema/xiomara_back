import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Iestudiante } from './interfaces/estudiante.interface';
import { estudianteDTO } from './dto/estudiante.dto';
import { estudianteService } from './estudiante.service';
import { semestreService } from './semestre.service';
import { semestre } from './interfaces/semestre.interface';

@Controller('estudiantes')
export class estudiantesController {
  constructor(private readonly estudianteService: estudianteService,
    private readonly semestreService: semestreService) {}

  @Post()
  async create(@Body() create: estudianteDTO) {
    this.estudianteService.create(create);
  }

  @Get()
  async findAll(): Promise<Iestudiante[]> {
    return this.estudianteService.findAll();
  }

  @Get(':codigo')
  async findByCodigo(@Param('codigo') codigo: number): Promise<semestre> {
    return this.semestreService.findByCode(codigo);
  }
}