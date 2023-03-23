## NestJS Open AI API

This is a OpenAI API NestJS wrapper built with ChatGPT.

## Installation

```bash
npm install nestjs-open-ai-api
```

## Usage

Sync way
```ts
@Module({
  imports: [
    OpenAiModule.register({
      apiKey: '...'
    })
  ]
})
export class AppModule {}
```

Async way
```ts
@Module({
  imports: [
    OpenAiModule.registerAsync({
      imports: [ConfigModule.forFeature(openAiLoader)],
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        const apiKey = this.configService.get<string>('openAi.apiKey')
        return {
          apiKey: configService.apiKey
        }
      }
    })
  ]
})
export class AppModule {}
```

OpenAiService
```ts
@Injectable()
export class AppService {
  constructor(
    private readonly openAiService: OpenAiService
  ) {
    const { data } = await this.openAiService.client.createCompletion({
      model: 'text-davinci-003',
      prompt: "Decide whether a Tweet's sentiment is positive, neutral, or negative.\n\nTweet: \"I loved the new Batma movie!\"\nSentiment:",
      temperature: 0,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    return data;
  }
}
```



## Support

Feel free to create pull request.


## License

This Nest Module is [MIT licensed](LICENSE).
