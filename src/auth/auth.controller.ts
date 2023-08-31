import { Controller,Post,Get,Body,ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from 'src/DTO/registerUser.dto';
import { UserLoginDto } from 'src/DTO/userLogin.dto';


@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){

    }

    @Post("register")
    posteregister(@Body(ValidationPipe) regDto:RegisterUserDto){
        return this.authService.registerUser(regDto)
    }

    @Post('login')
    signin(@Body(ValidationPipe) userLogin:UserLoginDto){
        return this.authService.loginUser(userLogin)
    }

    

   
  

  
   





}
