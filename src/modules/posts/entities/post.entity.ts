import { randomUUID } from 'crypto';
// import { User } from 'src/modules/users/entities/user.entity';

export class Post {
  readonly id: string;
  content: string;
  userId: string;
  readonly createdAt: Date;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
