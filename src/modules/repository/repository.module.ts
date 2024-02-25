import { Global, Module } from '@nestjs/common';
import { UserRepository } from './services/user.repository';
import { TagRepository } from './services/tag.repository';
import { RefreshTokenRepository } from './services/refresh-token.repository';
import { ArticleRepository } from './services/article.repository';

const repositories = [
  UserRepository,
  TagRepository,
  RefreshTokenRepository,
  ArticleRepository,
];

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [...repositories],
  exports: [...repositories],
})
export class RepositoryModule {}
