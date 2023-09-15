import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private postsRespository: PostsRepository) {}

  async create(userID: string, createPostDto: CreatePostDto) {
    const post = this.postsRespository.create(userID, createPostDto);
    return post;
  }

  async findAll() {
    return await this.postsRespository.findAll();
  }

  async findOne(id: string) {
    const findPost = this.postsRespository.findOne(id);
    if (!findPost) {
      throw new NotFoundException('post not found');
    }
    return findPost;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const findPost = this.postsRespository.findOne(id);
    if (!findPost) {
      throw new NotFoundException('post not found');
    }
    return await this.postsRespository.update(id, updatePostDto);
  }

  async remove(id: string) {
    const findPost = this.postsRespository.findOne(id);
    if (!findPost) {
      throw new NotFoundException('post not found');
    }
    await this.postsRespository.delete(id);
  }
}
