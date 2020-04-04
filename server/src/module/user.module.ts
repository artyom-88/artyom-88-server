import { Module } from '@nestjs/common';
import { userProviders } from '../providers/user.providers';
import { UserService } from '../service/user.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})

export class UserModule {
}
