import { Module } from '@nestjs/common';
import { SettingController } from 'src/setting/setting.controller';
import { accountProvider } from 'src/account/account.provider';
import { settingProvider } from 'src/setting/setting.provider';
import { AccountService } from 'src/account/account.service';
import { SettingService } from 'src/setting/setting.service';


@Module({
  providers: [
    SettingService, 
    AccountService, 
    ...settingProvider,
    ...accountProvider
  ],
  controllers: [SettingController],
})
export class SettingModule {}