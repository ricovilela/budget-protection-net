import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { ConstantKeys } from '../shared/azure/constant-keys.enum';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(ConstantKeys.dbHost) private readonly dbHost: string,
    @Inject(ConstantKeys.dbUser) private readonly dbUser: string,
    @Inject(ConstantKeys.dbPass) private readonly dbPass: string,
    @Inject(ConstantKeys.dbName) private readonly dbName: string,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    if (process.env.NODE_ENV !== 'TEST') {
      return {
        type: 'mssql',
        host: this.dbHost,
        username: this.dbUser,
        password: this.dbPass,
        database: this.dbName,
        port: 1433,
        entities: [__dirname + '../../**/*.entity{.ts,.js}'],
        synchronize: false,
        options: { enableArithAbort: true },
        extra: { trustServerCertificate: true },
      };
    } else {
      return {
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [__dirname + '../../**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: false,
      };
    }
  }
}
