import { Test, TestingModule } from '@nestjs/testing';
import { ApiLoggerService } from '../logger/logger.service';
import { AzureService } from './azure.service';

describe('AzureService', () => {
  let sut: AzureService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AzureService, ApiLoggerService],
    }).compile();

    sut = module.get<AzureService>(AzureService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });
});
