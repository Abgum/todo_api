import { Column, Entity, PrimaryGeneratedColumn,OneToMany } from "typeorm";
import { TodoEntity } from "./todo.entity";

@Entity()
export class UserEntity{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    username:string

    @Column()
    password:string

    @Column()
    salt:string


    @OneToMany(() => TodoEntity , (todo) => todo.user)
    todos:TodoEntity[]
    
 

    

   

    

}