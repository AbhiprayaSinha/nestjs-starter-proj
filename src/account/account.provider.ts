import { Account } from 'src/account/account.model';

export const accountProvider = [
    {
        provide: "ACCOUNT_REPOSITORY",
        useValue: Account,
    },
];