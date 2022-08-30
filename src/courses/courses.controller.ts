import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('list')
  listAll() {
    return 'Lista de cursos';
  }
}
