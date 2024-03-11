import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SettingModule } from './setting/setting.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    SettingModule,
    AccountModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}