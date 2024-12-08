import { User } from './types';
import { UserIcon } from './UserIcon';

const example = {
    default: {
        users: [
            {
                id: '1',
                username: 'snow123',
                name: 'John Snow',
                age: 25,
                avatar: UserIcon,
            } as User,
            {
                id: '2',
                username: 'dan79',
                name: 'Dan Mayer',
                age: 23,
                avatar: UserIcon,
            } as User,
            {
                id: '3',
                username: 'george',
                name: 'George Smith',
                age: 30,
                avatar: UserIcon,
            } as User,
        ],
    },
}

export default example;