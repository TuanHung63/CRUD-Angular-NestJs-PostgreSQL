import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo:Repository<User>){}
    findAll():Promise<User[]>{
        return this.userRepo.find();
    }
    findById(id:number):Promise<User>{
        return this.userRepo.findOne(id);
    }
    create(newUser){
        this.userRepo.insert(newUser);
    }
    update(userUpdate){
        this.userRepo.update(userUpdate.id,userUpdate);
    }
    delete(id:number){
        this.userRepo.delete(id);
    }

}
