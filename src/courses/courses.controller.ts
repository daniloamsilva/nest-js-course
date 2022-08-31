import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('')
  index(@Res() response) {
    return response.status(HttpStatus.OK).json({
      message: 'Lista de cursos.',
    });
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return `Course #${id}`;
  }

  @Post('')
  @HttpCode(HttpStatus.NO_CONTENT)
  store(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Res() response, @Param('id') id: string, @Body() body) {
    return response.json({
      id,
      body,
    });
  }

  @Delete(':id')
  destroy(@Res() response, @Param('id') id: string) {
    return response.json({ message: 'Curso apagado com sucesso.' });
  }
}
