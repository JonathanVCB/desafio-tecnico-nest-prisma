/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PostsRepository } from '../posts.repository';
import { CreatePostDto } from '../../dto/create-post.dto';
import { UpdatePostDto } from '../../dto/update-post.dto';
import { Post } from '../../entities/post.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class PostsPrismaRepository implements PostsRepository {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, data: CreatePostDto): Promise<Post> {
    const post = new Post();
    Object.assign(post, { ...data });
    const newPost = this.prisma.post.create({
      data: {
        ...post,
        userId,
      },
    });

    return plainToInstance(Post, newPost);
  }
  async findAll(): Promise<Post[]> {
    const posts = await this.prisma.post.findMany();
    return plainToInstance(Post, posts);
  }
  async findOne(id: string): Promise<Post> {
    const post = await this.prisma.post.findUnique({
      where: { id },
    });
    return plainToInstance(Post, post);
  }
  async update(id: string, data: UpdatePostDto): Promise<Post> {
    const post = await this.prisma.post.update({
      where: { id },
      data: { ...data },
    });
    return plainToInstance(Post, post);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.post.delete({ where: { id } });
  }
}
