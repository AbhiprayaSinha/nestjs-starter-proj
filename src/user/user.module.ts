import { Module } from '@nestjs/common';

import { UserService } from 'src/user/user.service';
import { userProviders } from 'src/user/user.provider';
    
@Module({
  providers: [UserService, ...userProviders],
  exports: [UserService],
})
export class UserModule {}