import { Controller, Get, Post, Body } from '@nestjs/common';

import { Account as AccountModel } from 'src/account/account.model';
import { AccountService } from 'src/account/account.service';
import { CreateAccountDto } from 'src/account/account.dto';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) { }

    @Get()
    async findAll(): Promise<AccountModel[]> {
        // no need to do return await. just return is ok. 
        return await this.accountService.findAll();
    }

    // do not allow extra properties to be present in CreateAccountDto
    // use forbidNonWhitelisted
    @Post()
    async create(@Body() account: CreateAccountDto): Promise<AccountModel> {
        return await this.accountService.create(account);
    }
}