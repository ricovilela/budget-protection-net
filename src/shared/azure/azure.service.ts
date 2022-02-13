/* istanbul ignore file */

import { Injectable } from '@nestjs/common';

import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';

import { ConstantKeys } from './constant-keys.enum';
import { ApiLoggerService } from '../logger/logger.service';

@Injectable()
export class AzureService {
  private readonly memoization: Record<string, string>;
  constructor(private logger: ApiLoggerService) {
    this.logger.setContext(AzureService.name);
    this.memoization = {};
  }

  private fetchEnvVar(key: ConstantKeys): string | undefined {
    if (key in process.env) {
      return process.env[key];
    }

    return undefined;
  }

  private async getAndMemoizeSecret(key: ConstantKeys): Promise<string> {
    const keyVaultName = process.env.KEY_VAULT_NAME;
    const KVUri = `https://${keyVaultName}.vault.azure.net`;

    const credential = new DefaultAzureCredential();
    const clientAzureKeyVault = new SecretClient(KVUri, credential);

    const keyReplace = key.replace(/_/g, '-');
    try {
      if (!(key in this.memoization)) {
        const secretValue = await clientAzureKeyVault.getSecret(keyReplace);
        this.memoization[key] = secretValue.value;
      }
    } catch (err) {
      this.logger.error(
        `SECRET "${keyReplace}" WAS NOT FOUND! \n ${JSON.stringify(err)}`,
      );
    }

    return this.memoization[key];
  }

  async fetchEnvSecret(key: ConstantKeys): Promise<string> {
    if (process.env.NODE_ENV !== 'TEST')
      this.logger.debug(`Fetching secret ${key}`);

    let secret = this.fetchEnvVar(key);

    if (!secret) {
      secret = await this.getAndMemoizeSecret(key);
    }

    return secret;
  }
}
