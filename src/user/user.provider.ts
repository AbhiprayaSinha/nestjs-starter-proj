import { User } from 'src/user/user.model';

export const userProviders = [
    {
        provide: "USER_REPOSITORY",
        useValue: User,
    },
];