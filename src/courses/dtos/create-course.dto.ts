import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly duration: number;

  @IsString({ each: true })
  readonly tags: string[];
}
