import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { Course } from './course.entity';

import { v4 as uuid } from 'uuid';

@Entity('tags')
export class Tag {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Course, (course) => course.tags)
  courses: Course[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @BeforeInsert()
  generateId() {
    if (this.id) return;
    this.id = uuid();
  }
}
