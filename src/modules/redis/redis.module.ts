import { Module, Provider } from '@nestjs/common';
import { REDIS_CLIENT } from './redis.constants';
import { Redis } from 'ioredis';
import { ConfigService } from '@nestjs/config';
import { ConfigType, RedisConfig } from '../../configs/config.type';
import { RedisService } from './redis.service';

const redisProvider: Provider = {
  provide: REDIS_CLIENT,
  useFactory: (config: ConfigService<ConfigType>): Redis => {
    const redisConfig = config.get<RedisConfig>('redis');
    return new Redis({
      port: redisConfig.port,
      host: redisConfig.host,
      password: redisConfig.password,
    });
  },
  inject: [ConfigService],
};

@Module({
  imports: [],
  controllers: [],
  providers: [redisProvider, RedisService],
  exports: [RedisService],
})
export class RedisModule {}
