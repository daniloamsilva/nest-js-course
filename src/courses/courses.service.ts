import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 'fdafda987sd98f7sadfsad',
      name: 'Nome do curso',
      description: 'Descrição do curso',
      duration: 200,
    },
  ];

  index() {
    return this.courses;
  }

  show(id: string) {
    const course = this.courses.find((course) => course.id === id);

    if (!course) {
      throw new NotFoundException('Course not found.');
    }

    return course;
  }

  store(createCourseDTO: CreateCourseDto) {
    return this.courses.push({ id: this.makeId(20), ...createCourseDTO });
  }

  update(id: string, updateCourseDTO: UpdateCourseDto) {
    const indexCourse = this.courses.findIndex((course) => course.id === id);

    if (indexCourse === -1) {
      throw new NotFoundException('Course not found.');
    }

    this.courses[indexCourse] = { id, ...updateCourseDTO } as Course;

    return this.courses[indexCourse];
  }

  destroy(id: string) {
    const indexCourse = this.courses.findIndex((course) => course.id === id);

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    } else {
      throw new NotFoundException('Course not found.');
    }

    return;
  }

  makeId(length: number) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
