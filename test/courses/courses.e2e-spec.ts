import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CoursesModule } from '../../src/courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
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
    await app.init();
  });

  it.todo('POST /courses');
});
