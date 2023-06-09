import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 160 })
  name: string;

  @Column({ length: 160, unique: true })
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({default: false})
  isAdm: boolean;

  @Column()
  @Exclude()
  password: string;
}

export { User };
