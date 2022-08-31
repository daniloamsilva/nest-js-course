import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('')
  index() {
    return 'Lista de cursos';
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return `Course #${id}`;
  }
}
