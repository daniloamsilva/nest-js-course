import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { Course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';

@Injectable()
export class CoursesService {
  constructor(
    @Inject('COURSES_REPOSITORY')
    private readonly coursesRepository: Repository<Course>,
    @Inject('TAGS_REPOSITORY')
    private readonly tagsRepository: Repository<Tag>,
  ) {}

  async index() {
    const courses = await this.coursesRepository.find({
      relations: ['tags'],
    });
    return courses;
  }

  async show(id: string) {
    const course = await this.coursesRepository.findOne({
      where: { id },
      relations: {
        tags: true,
      },
    });

    if (!course) {
      throw new NotFoundException('Course not found.');
    }

    return course;
  }

  async store(createCourseDTO: CreateCourseDto) {
    const tags = await Promise.all(
      createCourseDTO.tags.map((name) => this.preloadTagByName(name)),
    );

    const course = this.coursesRepository.create({ ...createCourseDTO, tags });
    await this.coursesRepository.save(course);

    return course;
  }

  async update(id: string, updateCourseDTO: UpdateCourseDto) {
    const tags =
      updateCourseDTO.tags &&
      (await Promise.all(
        updateCourseDTO.tags.map((name) => this.preloadTagByName(name)),
      ));

    const course = await this.coursesRepository.preload({
      id,
      ...updateCourseDTO,
      tags,
    });

    if (!course) {
      throw new NotFoundException('Course not found.');
    }

    await this.coursesRepository.save(course);
    return course;
  }

  async destroy(id: string) {
    const course = await this.coursesRepository.findOne({ where: { id } });

    if (!course) {
      throw new NotFoundException('Course not found.');
    }

    await this.coursesRepository.remove(course);
    return;
  }

  private async preloadTagByName(name: string): Promise<Tag> {
    const tag = await this.tagsRepository.findOne({ where: { name } });

    if (tag) return tag;
    return this.tagsRepository.create({ name });
  }
}
