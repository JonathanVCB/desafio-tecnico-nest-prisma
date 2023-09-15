/* eslint-disable prettier/prettier */
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Post } from '../entities/post.entity';

export abstract class PostsRepository {
  abstract create(userId: string, data: CreatePostDto): Promise<Post> | Post;
  abstract findAll(): Promise<Post[]> | Post[];
  abstract findOne(id: string): Promise<Post | undefined> | Post;
  abstract update(
    id: string,
    data: UpdatePostDto,
  ): Promise<Post | undefined> | Post;
  abstract delete(id: string): Promise<void | undefined> | void;
}
