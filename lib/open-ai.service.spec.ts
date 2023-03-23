import { Test, TestingModule } from '@nestjs/testing';
import { NestjsOpenAiService } from './open-ai.service';

describe('NestjsOpenAiService', () => {
  let service: NestjsOpenAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestjsOpenAiService],
    }).compile();

    service = module.get<NestjsOpenAiService>(NestjsOpenAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
