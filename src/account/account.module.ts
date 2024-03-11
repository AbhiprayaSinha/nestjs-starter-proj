import { Module } from '@nestjs/common';
import { AccountController } from 'src/account/account.controller';
import { accountProvider } from 'src/account/account.provider';
import { AccountService } from 'src/account/account.service';


@Module({
  providers: [AccountService, ...accountProvider],
  controllers: [AccountController],
})
export class AccountModule {}