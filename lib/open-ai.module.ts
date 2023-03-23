import { DynamicModule, Global, Module } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { OpenAiModuleAsyncOptions } from './interfaces/open-ai-async-module-options.interface';
import { OpenAiConfigurationParameters } from './interfaces/open-ai-configuration-parameter.interface';
import { OpenAiConfigModule } from './open-ai.config';

@Global()
@Module({})
export class OpenAiModule {
  static register(configuration: OpenAiConfigurationParameters): DynamicModule {
    return {
      global: true,
      module: OpenAiModule,
      providers: [
        {
          provide: OpenAiConfigModule.OPEN_AI_CONFIGURATION,
          useValue: configuration,
        },
        OpenAiService,
      ],
      exports: [OpenAiService],
    };
  }

  static async registerAsync(
    options: OpenAiModuleAsyncOptions,
  ): Promise<DynamicModule> {
    return {
      global: true,
      module: OpenAiModule,
      imports: options.imports,
      providers: [
        {
          provide: OpenAiConfigModule.OPEN_AI_CONFIGURATION,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        OpenAiService,
      ],
      exports: [OpenAiService],
    };
  }
}
