export interface User {
  confirmed: boolean;
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;
}

export interface Chat {
  _id: string;
  members: User[];
}
