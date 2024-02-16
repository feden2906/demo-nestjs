import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, HealthModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
