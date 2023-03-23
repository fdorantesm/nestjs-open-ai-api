import { ModuleMetadata } from '@nestjs/common/interfaces';
import { OpenAiConfigurationParameters } from './open-ai-configuration-parameter.interface';

export interface OpenAiModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (
    ...args: any[]
  ) => Promise<OpenAiConfigurationParameters> | OpenAiConfigurationParameters;
  inject?: any[];
}
