import { Injectable, Inject } from '@nestjs/common';

import { Account } from 'src/account/account.model';
import { CreateAccountDto } from 'src/account/account.dto';


@Injectable()
export class AccountService {
    constructor(@Inject("ACCOUNT_REPOSITORY") private readonly accountRepository: typeof Account) { }

    async create(account: CreateAccountDto): Promise<Account> {
        return await this.accountRepository.create<Account>({ ...account });
    }

    async findAll(): Promise<Account[]> {
        return await this.accountRepository.findAll<Account>();
    }

    async findOneByName(name: string): Promise<Account> {
        return await this.accountRepository.findOne<Account>({ where: { name } });
    }

    async findOneById(id: number): Promise<Account> {
        return await this.accountRepository.findOne<Account>({ where: { id } });
    }
};