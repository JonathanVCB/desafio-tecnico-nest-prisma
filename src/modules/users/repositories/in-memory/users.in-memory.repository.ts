import { CreateUserDto } from "../../dto/create-user.dto";
import { UpdateUserDto } from "../../dto/update-user.dto";
import { User } from "../../entities/user.entity";
import { UsersRepository } from "../users.repository";

export class UsersInMemoryRepository implements UsersRepository{
    create(data: CreateUserDto): User | Promise<User> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<User[]> | [] {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): User | Promise<User> {
        throw new Error("Method not implemented.");
    }
    update(id: string, data: UpdateUserDto): User | Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void | Promise<void> {
        throw new Error("Method not implemented.");
    }
}