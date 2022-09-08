import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { CoursesModule } from '../../src/courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateCourseDto } from '../../src/courses/dtos/create-course.dto';

describe('Courses: /courses', () => {
  let app: INestApplication;

  const course = {
    name: 'NestJS com TypeORM',
    description: 'Criando apis restful com nestjs',
    tags: ['nestjs', 'typeorm', 'nodejs', 'typescript']
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoursesModule, TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'cursonestjs_test',
        entities: [__dirname + '/**/*.entity.js'],
        autoLoadEntities: true,
        synchronize: true,
      })],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /courses', () => {
    return request(app.getHttpServer())
      .post('/courses')
      .send(course as CreateCourseDto)
      .expect(HttpStatus.NO_CONTENT);
  });
});
