import { Injectable, NotFoundException } from '@nestjs/common';
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

  store(storeCourseDTO: any) {
    return this.courses.push(storeCourseDTO);
  }

  update(id: string, updateCourseDTO: any) {
    const indexCourse = this.courses.findIndex((course) => course.id === id);

    if (indexCourse === -1) {
      throw new NotFoundException('Course not found.');
    }

    this.courses[indexCourse] = updateCourseDTO;

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
}
