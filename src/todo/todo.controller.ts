import {
    Body, ClassSerializerInterceptor,
    Controller, Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseInterceptors,
    ValidationPipe,
    UseGuards
  } from "@nestjs/common";
  import { TodoService } from "./todo.service";
  import {CretateTodoDto } from "../DTO/create-todo.dto";
  import { TodoStatus } from "../entities/todo.entity";
  import { stat } from "fs";
  import { TodoStatusValidationPipe } from "../pipes/TodoStatusValidation.pipe";
  import {AuthGuard} from '@nestjs/passport'
import { User } from "src/auth/user.decorator";
import { UserEntity } from "src/entities/user.entity";
  
 
    @Controller("todos")
    @UseGuards(AuthGuard())
    export class TodoController {
    constructor(private todoService: TodoService) {
    }
  
    // http GET verb
    @Get()
    getAllTodos(
        @User() user:UserEntity
    ) {
      // console.log(this.todoService.getAllTodos());
      return this.todoService.getAllTodos(user);
    }

    @Get('get/:id')
    getTodo(@Param('id') id:number){


        return this.todoService.getOneTodo(id)

    }
  
    // http POST verb
    @Post()
    createNewTodo(@Body(ValidationPipe) data: CretateTodoDto,
    @User() user: UserEntity
    ) {

  
      return this.todoService.createTodo(data, user);
    }

    
  
    @Patch(":id")
    updateTodo(
      @Body("status", TodoStatusValidationPipe) status: TodoStatus,
      @Param("id") id: number,
      @User() user: UserEntity
    ) {
      return this.todoService.update(id, status, user);
    }
  
    @Delete(':id')
    deleteTodo(@Param('id') id: number,
    @User() user: UserEntity
    ) {
      return this.todoService.delete(id,user);
    }
  
  }