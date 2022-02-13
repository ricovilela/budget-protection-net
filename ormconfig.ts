import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
const config: ConnectionOptions = {
  type: 'mssql',
  host: process.env['DB-BUD-PJCT-NET-HOST'],
  port: 1433,
  password: process.env['DB-BUD-PJCT-NET-PASSWORD'],
  database:
    process.env['NODE_ENV'] === 'CREATE-DB'
      ? 'master'
      : process.env['DB-BUD-PJCT-NET-DATABASE'],
  username: process.env['DB-BUD-PJCT-NET-USERNAME'],
  synchronize: false,
  migrationsRun: true,
  logging: true,
  migrations: [__dirname + '/src/**/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
  options: { enableArithAbort: true },
  extra: { trustServerCertificate: true },
};

export = config;
