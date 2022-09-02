import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
  ) {}

  async index() {
    const courses = await this.coursesRepository.find();
    return courses;
  }

  async show(id: string) {
    const course = await this.coursesRepository.findOne(id);

    if (!course) {
      throw new NotFoundException('Course not found.');
    }

    return course;
  }

  async store(createCourseDTO: CreateCourseDto) {
    const course = this.coursesRepository.create(createCourseDTO);
    await this.coursesRepository.save(course);

    return course;
  }

  async update(id: string, updateCourseDTO: UpdateCourseDto) {
    const course = await this.coursesRepository.preload({
      id,
      ...updateCourseDTO,
    });

    if (!course) {
      throw new NotFoundException('Course not found.');
    }

    await this.coursesRepository.save(course);
    return course;
  }

  async destroy(id: string) {
    const course = await this.coursesRepository.findOne(id);

    if (!course) {
      throw new NotFoundException('Course not found.');
    }

    await this.coursesRepository.remove(course);
    return;
  }
}
