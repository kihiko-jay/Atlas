import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { envSchema } from './env.schema';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envSchema,
      validationOptions: { abortEarly: false },
      envFilePath: [`.env.${process.env.NODE_ENV ?? 'development'}`, '.env'],
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
  ],
})
export class ConfigModule {}
