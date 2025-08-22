import { BeforeInsert, Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { IsEmail } from 'class-validator';
import { Exclude, instanceToPlain } from 'class-transformer';
import * as bcrypt from 'bcryptjs';

@Entity('users')
export class UserEntity extends AbstractEntity {
  @Column()
  @IsEmail()
  email: string;

  @Column({ unique: true })
  username: string;

  @Column({ default: '' })
  bio: string;

  @Column({ default: null, nullable: true })
  image: string | null;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  // TODO: add following

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  toJSON() {
    return instanceToPlain(this);
  }
}
