import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from '../dto/req/create-user.dto';
import { UpdateUserDto } from '../dto/req/update-user.dto';

@Injectable()
export class UserService {
  public async create(createUserDto: CreateUserDto): Promise<any> {
    return 'This action adds a new user';
  }

  public async findAll(): Promise<any> {
    return `This action returns all user`;
  }

  public async findOne(id: number): Promise<any> {
    throw  new UnprocessableEntityException('wwwwwwww')

    return `This action returns a #${id} user`;
  }

  public async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return `This action updates a #${id} user`;
  }

  public async remove(id: number): Promise<any> {
    return `This action removes a #${id} user`;
  }
}
