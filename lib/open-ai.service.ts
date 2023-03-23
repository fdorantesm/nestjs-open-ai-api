import { Inject, Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { OpenAiConfigModule } from './open-ai.config';
import { OpenAiConfigurationParameters } from './interfaces/open-ai-configuration-parameter.interface';

@Injectable()
export class OpenAiService {
  private _openai: OpenAIApi;

  constructor(
    @Inject(OpenAiConfigModule.OPEN_AI_CONFIGURATION)
    private readonly config: OpenAiConfigurationParameters,
  ) {
    this._openai = new OpenAIApi(new Configuration(this.config));
  }

  public get client(): OpenAIApi {
    return this._openai;
  }
}
