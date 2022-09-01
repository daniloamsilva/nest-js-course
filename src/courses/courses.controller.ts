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
  index() {
    return this.coursesService.index();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.coursesService.show(id);
  }

  @Post('')
  @HttpCode(HttpStatus.NO_CONTENT)
  store(@Body() body) {
    return this.coursesService.store(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.coursesService.destroy(id);
  }
}
