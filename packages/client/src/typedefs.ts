export type User = {
  firstName: string;
  id: string;
  lastName: string;
  username: string;
}

export type Post = {
  createdAt?: Date;
  id: string;
  text: string;
  title: string;
  updatedAt?: Date;
  user: User;
  userId: string;
}

export type AddPostAsyncResponse = {
  id: string;
}

export type DeletePostAsyncResponse = {
  id: string;
}
