import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

  @Post('')
  store(@Body() body) {
    return body;
  }
}
