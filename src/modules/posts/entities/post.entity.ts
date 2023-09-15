import { randomUUID } from 'crypto';
import { User } from 'src/modules/users/entities/user.entity';

export class Post {
  readonly id: string;
  content: string;
  user: User;
  userId: string;
  readonly createdAt: Date;

  constructor() {
    this.id = randomUUID();
  }
}
