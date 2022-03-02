import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

  @Get()
  async getAll():Promise<User[]>{
    return await this.usersService.findAll();

  }
  @Get('findOne/:id')
  async getUserById(@Param('id') id:number):Promise<User>{
    return await this.usersService.findById(id)
  }
  @Post()
  @HttpCode(201)
  createNewUser(@Body() newUser:any){
    this.usersService.create(newUser);
  }
  @Put('update')
  @HttpCode(200)
  updateUser(@Body() updateUser:any){
    this.usersService.update(updateUser);

  }
  @Delete('delete/:id')
  @HttpCode(200)
  deleteUser(@Param('id') id:number){
      this.usersService.delete(id);
  }
}
