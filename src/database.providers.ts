import { DataSource } from 'typeorm';
import { CreateCoursesTable1662430361433 } from './migrations/1662430361433-CreateCoursesTable';
import { CreateTagsTable1662431300826 } from './migrations/1662431300826-CreateTagsTable';
import { CreateCoursesTagsTable1662519008607 } from './migrations/1662519008607-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1662519250713 } from './migrations/1662519250713-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1662519635607 } from './migrations/1662519635607-AddTagsIdToCoursesTagsTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'cursonestjs',
        entities: [__dirname + '/**/*.entity.js'],
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'cursonestjs',
  entities: [__dirname + '/**/*.entity.js'],
  migrations: [
    CreateCoursesTable1662430361433,
    CreateTagsTable1662431300826,
    CreateCoursesTagsTable1662519008607,
    AddCoursesIdToCoursesTagsTable1662519250713,
    AddTagsIdToCoursesTagsTable1662519635607,
  ],
});
