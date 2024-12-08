import { UserIcon } from './UserIcon';

export interface User {
    id: string;
   username: string;
   name: string;
   age: number;
   avatar: typeof UserIcon;
 }

///export type User = UserItem[]
