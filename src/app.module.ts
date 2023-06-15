import { Module } from '@nestjs/common';
import { PersistenceModule } from './infrastructure/persistence.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    PersistenceModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        process.cwd(),
        'environments',
        `.env.${process.env.SCOPE?.trimEnd()}`,
        ),
      }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
