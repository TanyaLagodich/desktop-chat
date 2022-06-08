export interface IUser {
  id: number;
  avatar: string;
  name: string
  status: string,
  lastMessage: {
    text: string;
    read: boolean;
    isMe: boolean;
    createdAt: number;
  }
}
