import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PostsRepository } from './repositories/posts.repository';
import { PostsPrismaRepository } from './repositories/prisma/posts.prisma,repository';

@Module({
  controllers: [PostsController],
  providers: [
    PostsService,
    PrismaService,
    {
      provide: PostsRepository,
      useClass: PostsPrismaRepository,
    },
  ],
})
export class PostsModule {}
