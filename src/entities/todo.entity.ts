import { Column, Entity, PrimaryGeneratedColumn,ManyToOne,JoinColumn,Unique } from "typeorm";
import { UserEntity } from "./user.entity";


@Entity('todos')
export class TodoEntity {
  save() {
      throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  status: TodoStatus;


  @ManyToOne(() => UserEntity, (user) => user.todos)
  user:UserEntity

  @Column({ nullable: true }) // userId alanı boş bırakılabilecek
  userId: number | null;
  



 
}

export enum TodoStatus {
  OPEN = 'OPEN',
  WIP = 'WIP',
  COMPLETED = 'COMPLETED'
}

