import { Injectable } from '@nestjs/common';
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
    this.courses;
  }

  show(id: string) {
    this.courses.find((course) => course.id === id);
  }

  store(storeCourseDTO: any) {
    this.courses.push(storeCourseDTO);
  }

  update(id: string, updateCourseDTO: any) {
    const indexCourse = this.courses.findIndex((course) => course.id === id);

    this.courses[indexCourse] = updateCourseDTO;
  }

  destroy(id: string) {
    const indexCourse = this.courses.findIndex((course) => course.id === id);

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
