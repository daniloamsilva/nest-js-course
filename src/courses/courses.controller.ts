import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
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
}
