import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule,TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TodoEntity } from './entities/todo.entity';
import { UserEntity } from './entities/user.entity';

const ormOptions :TypeOrmModuleOptions={
  type:'mysql',
  host: 'localhost',
  port:3306,
  username:'root',
  password:'23344556',
  entities: [TodoEntity, UserEntity],

  database:'deneme',
  autoLoadEntities:true,
  synchronize:true


}

@Module({
  imports: [TodoModule,
  TypeOrmModule.forRoot(ormOptions),
  AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
