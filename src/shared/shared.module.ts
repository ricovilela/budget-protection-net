import { Global, Module } from '@nestjs/common';
import { FactoryProvider } from '@nestjs/common/interfaces';
import { ConstantKeys } from './azure/constant-keys.enum';
import { AzureService } from './azure/azure.service';
import { ApiLoggerService } from './logger/logger.service';

const secretProviders: FactoryProvider[] = Object.values(ConstantKeys).map(
  (key: ConstantKeys): FactoryProvider => {
    return {
      inject: [AzureService],
      provide: key,
      useFactory: async (secretService: AzureService) => {
        const secret = await secretService.fetchEnvSecret(key);
        return secret;
      },
    };
  },
);

@Global()
@Module({
  providers: [ApiLoggerService, AzureService, ...secretProviders],
  exports: [ApiLoggerService, ...secretProviders],
})
export class SharedModule {}
