import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.usersRepository.findByEmail(
      createUserDto.email,
    );
    if (findUser) {
      throw new ConflictException('email already exist');
    }
    const user = this.usersRepository.create(createUserDto);
    return user;
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  async findOne(id: string) {
    const findUser = await this.usersRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('user not found');
    }
    return findUser;
  }

  async findByEmail(email: string) {
    const findUser = await this.usersRepository.findByEmail(email);
    if (!findUser) {
      throw new NotFoundException('user not found');
    }
    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.usersRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('user not found');
    }
    return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const findUser = await this.usersRepository.findOne(id);
    if (!findUser) {
      throw new NotFoundException('user not found');
    }
    await this.usersRepository.delete(id);
  }
}
