import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { Tag } from './tag.entity';

@Entity('courses')
export class Course {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @JoinTable()
  @ManyToMany(() => Tag, (tag) => tag.courses, { cascade: true })
  tags: Tag[];

  constructor() {
    if (!this.id) this.id = this.makeId(20);
  }

  makeId(length: number) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
