import * as process from 'process';
import { ConfigType } from './config.type';

export default (): ConfigType => ({
  app: {
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    host: process.env.APP_HOST || '0.0.0.0',
  },
  postgres: {
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    host: process.env.POSTGRES_HOST || '0.0.0.0',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    dbName: process.env.POSTGRES_DB,
  },
});
