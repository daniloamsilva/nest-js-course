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
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';

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
  store(@Body() body: CreateCourseDto) {
    return this.coursesService.store(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateCourseDto) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.coursesService.destroy(id);
  }
}
