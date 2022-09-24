import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;
  let id: string;
  let date: Date;

  beforeEach(async () => {
    service = new CoursesService();
    id = 'd86030e5-e82d-4181-b6e8-b703f1b91bbf';
    date = new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('should be able to find one course', async () => {
  //   const courseId = '1';
  //   const expectedCourse = {};

  //   coursesRepository.findOne.mockReturnValue(expectedCourse);
  //   const course = await service.show(courseId);
  //   expect(course).toBe(expectedCourse);
  // });

  // it('should not be able to find a non-existent course', () => {
  //   // code
  // });
});
